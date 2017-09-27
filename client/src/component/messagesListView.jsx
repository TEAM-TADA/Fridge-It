import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MessageListEntry from './messageListEntry.jsx';
import * as messageActions from '../actions/messageActions.js';

class MessageListView extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actions.fetchMessages(1); // DONT FORGET TO EDIT OUT THE 1
  }

  handleSubmit(event) {
    event.preventDefault();
    let entry = document.getElementById('entry');
    let entry1 = document.getElementById('entry1');
    if (entry.value !== '') {
      this.props.actions.postMessages(1, 1, entry.value || entry1.value);
      entry.value = '';
      entry1.value = '';
    } else {
      alert('Please enter a message');
    }
  }

  render() {
    const { messageList, messageFetched, messageFetching, actions } = this.props;

    if (messageList.length > 0) {
      return (
        <div>
          {messageList.map(message => (
            <MessageListEntry {...actions} key={message.id} message={message} />
          ))}

          <form>
            <label>
              Message:
              <input type="text" id="entry1" />
            </label>
            <button onClick={this.handleSubmit.bind(this)}>Submit Message</button>
          </form>
        </div>
      )

    } else {
      return (
        <div>
          Messages empty
          <form>
            <label>
              Message:
              <input type="text" id="entry" />
            </label>
            <button onClick={this.handleSubmit.bind(this)}>Submit Message</button>
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