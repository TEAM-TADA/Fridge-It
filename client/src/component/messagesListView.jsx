import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Form, Submit, Button } from 'semantic-ui-react'

import MessageListEntry from './messageListEntry.jsx';
import * as messageActions from '../actions/messageActions.js';

class MessageListView extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let state = this;
    setTimeout(() => {
      state.props.actions.fetchMessages(localStorage.getItem('fId'));
    }, 500);
  }

  
  render() {
    const { messageList, messageFetched, messageFetching, fridge, actions } = this.props;
    let username = localStorage.getItem('name');

    const handleSubmit = () => {
      let inputMsg = document.getElementById('inputMsg');
      if (inputMsg.value.match(/[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]/i) ) {
        this.props.actions.postMessages(fridge.id, username, inputMsg.value);
        inputMsg.value = '';
      }
    }

      return (
        <div>
          <h2 className="ui dividing header">Message Board</h2>
          <Form>
            <Form.Group inline>
              <Form.Input 
                type="text"
                id="inputMsg"
                placeholder="Enter message here"
              /> 
              <Form.Button onClick={(e) => {
                e.preventDefault();
                handleSubmit();
                }}
                content="Submit"
              />
            </Form.Group>
          </Form>
          {messageList.length > 0 ? messageList.map(message => (
            <MessageListEntry {...actions} key={message.id} message={message} />
          )): <h3> Your message board is empty </h3>}
        </div>
      )
  }
};

const mapState = (store) => {
  return {
    fridge: store.fridge.fridge,
    fridgePosted: store.fridge.posted,
    fridgeFetched: store.fridge.fetched,
    messageList: store.message.messages,
    messageFetched: store.message.fetched,
    messageFetching: store.message.fetching,
    messageError: store.message.error,
    username: store.auth.username,
  }
};

const mapDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(messageActions, dispatch),
  }
};

export default connect(mapState, mapDispatch)(MessageListView);