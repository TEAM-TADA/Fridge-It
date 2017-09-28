import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MessageListEntry from './messageListEntry.jsx';
import * as messageActions from '../actions/messageActions.js';

class MessageListView extends Component {
  constructor(props) {
    super(props);

    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.actions.fetchMessages(1); // DONT FORGET TO EDIT OUT THE 1 (fridgeId)
  }

  
  render() {
    const handleSubmit = () => {
      let entry = document.getElementById('inputMsg');
      let entry1 = document.getElementById('inputMsg1');
      console.log(entry, entry1);
      if (entry !== null || entry1 !== null) {
        console.log('im here');
        this.props.actions.postMessages(1, 1, entry !== null ? entry.value : entry1.value); //(fridgeId, messageId)
        entry.value = '';
        entry1.value = '';
      } else {
        alert('Please enter a message');
      }
    }
    
    const { messageList, messageFetched, messageFetching, actions } = this.props;
    if (messageList.length > 0) {
      // console.log('view before/after reducer: ', messageList);
      // console.log('what is handlesubmit: ', handleSubmit);
      return (
        <div>
          <h3 className="ui dividing header">Messages</h3>
          <form>
            <label>
              Message:
              <input type="text" id="inputMsg" />
            </label>
            <button onClick={(e) => {
              e.preventDefault();
              handleSubmit();
              }}>
              Submit Message
            </button>
          </form>

          {messageList.map(message => (
            <MessageListEntry {...actions} key={message.id} message={message} />
          ))}
        </div>
      )

    } else {
      return (
        <div>
          <h3 className="ui dividing header">Messages</h3>
          <form>
            <label>
              Message:
              <input type="text" id="inputMsg1" />
            </label>
            <button onClick={(e) => {
              e.preventDefault();
              handleSubmit();
              }}>Submit Message</button>
          </form>
        </div>

      )
    }
  }
};

const mapState = (store) => {
  return {
    fridgeId: store.fridgeId, // TODO: update with correct prop name
    messageList: store.message.messages,
    messageFetched: store.message.fetched,
    messageFetching: store.message.fetching,
    messageError: store.message.error,
  }
};

const mapDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(messageActions, dispatch),
  }
};

export default connect(mapState, mapDispatch)(MessageListView);