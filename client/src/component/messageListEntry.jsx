import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Icon, Button, Form, Card, Image } from 'semantic-ui-react';

class MessageListEntry extends Component { 
  constructor(props) {
    super(props);
  }

  
  render() {
    const { message, deleteMessages, updateMessages } = this.props
    console.log(message.createdAt);
    return (
      <Card.Group>
        <Card>
          <Card.Content>
            <Card.Header as='a'> user </Card.Header>
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
            <Button onClick={
              () => {
                let newLikes = message.like + 1;
                const msg = {...message, like: newLikes};
                updateMessages(msg)}
            }> 
              <Icon name='thumbs outline up'> 
                {message.like}
              </Icon>
            </Button>
            <Button onClick={() => deleteMessages(message.id)}>              
              <Icon name="remove icon" />
            </Button>
          </div>
          </Card.Content>
        </Card>
      </Card.Group>
    ) 
  }
}

export default MessageListEntry;