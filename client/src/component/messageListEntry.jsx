import React from 'react';
import { connect } from 'react-redux';

const MessageListEntry = ({ message }) => {
  return (
    <div id="entry">
      {message.messageText}
      
    </div>
  )
}

export default MessageListEntry;