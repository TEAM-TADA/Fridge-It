import React from 'react';
import { connect } from 'react-redux';

const MessageListEntry = ({ message, deleteMessages }) => {
  return (
    <div id="entry">
      {message.messageText}
      <button className="ui icon button" onClick={() => deleteMessages(message.id)}>              
        <i className="minus icon" />
      </button>
      <div>
        <button className="ui icon button"> 
          <i className="thumbs outline up icon" />
        </button>
      </div>
    </div>
  )
}

export default MessageListEntry;