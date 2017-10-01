import React, { Component } from 'react';
import { Icon, Button, Form, Card, Image, Popup } from 'semantic-ui-react';

class MessageListEntry extends Component { 
  constructor(props) {
    super(props);
  }
  
  render() {
    const { message, deleteMessages, updateMessages } = this.props
    const style = {
      textAlign: "right",
    }

    const LikeView = (
      <Button icon='thumbs outline up'
      onClick={
        () => {
          if (!message.like.includes(localStorage.getItem('name'))) {
            const msg = {...message, like: [...message.like, localStorage.getItem('name')]};
            updateMessages(msg)
          } else {
            message.like.splice(message.like.indexOf(localStorage.getItem('name')), 1);
            updateMessages(message)
          }
        }
      } /> 
    )

    const deleteButton = (
      <Button onClick={() => {
          deleteMessages(message.id)
      }}>              
        <Icon name="remove" />
      </Button>
    )
    
    return (
      <Card.Group>
        <Card>
          <Card.Content>
            <div style={style}>
              <Icon name="pin" />
            </div>
            <Card.Header> {message.user.split('@')[0]} </Card.Header>
            <Card.Meta>
              Date: {message.createdAt.split('T')[0]}
              {' '}
              Time: {Math.abs(Number(message.createdAt.split('T')[1].split('Z')[0].split('.')[0].split(':')[0]) - 7)}:{message.createdAt.split('T')[1].split('Z')[0].split('.')[0].split(':')[1]}:{message.createdAt.split('T')[1].split('Z')[0].split('.')[0].split(':')[2]}
            </Card.Meta>
            <Card.Description>
              {message.messageText}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
          <div className='ui two buttons'>
            <Popup trigger={LikeView} basic>
              <Popup.Content>
                {message.like.map(user => {
                  return user !== ' ' ? <p>{user.split('@')[0]}</p> : null;
                })}
              </Popup.Content>
            </Popup>
            {
              message.user === localStorage.getItem('name') ? deleteButton : null
            }
          </div>
          </Card.Content>
        </Card>
      </Card.Group>
    ) 
  }
}

export default MessageListEntry;