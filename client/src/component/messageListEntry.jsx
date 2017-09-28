import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Message, Button, Comment, Form, Header } from 'semantic-ui-react';

class MessageListEntry extends Component { 
  constructor(props) {
    super(props);
  }

  
  render() {
    const { message, deleteMessages, updateMessages } = this.props
    console.log(message.createdAt);
    return (
      <Comment.Group>
        <Comment>
          <Comment.Content>
            <Comment.Author as='a'> user </Comment.Author>
            <Comment.Metadata>
              Date: {message.createdAt.split('T')[0]}
              {' '}
              Time: {message.createdAt.split('T')[1].split('Z')[0].split('.')[0]}
            </Comment.Metadata>
            <Comment.Text>
              {message.messageText}
            </Comment.Text>
          </Comment.Content>
        </Comment>

          <button className="ui icon button" onClick={
            () => {
              let newLikes = message.like + 1;
              const msg = {...message, like: newLikes};
              updateMessages(msg)}
          }> 
            <i className="thumbs outline up icon">
              {message.like}
            </i>
          </button>
          <button className="ui icon button" onClick={() => deleteMessages(message.id)}>              
            <i className="remove icon" />
          </button>

      </Comment.Group>
    ) 
  }
}

export default MessageListEntry;