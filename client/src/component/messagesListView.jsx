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
    this.props.actions.fetchMessages(1); // DONT FORGET TO EDIT OUT THE 1 (fridgeId)
  }

  
  render() {
    const handleSubmit = () => {
      let inputMsg = document.getElementById('inputMsg');
      // let inputMsg1 = document.getElementById('inputMsg1');
      if (!inputMsg.value.match(/[a-z0-9_]/i) ) {
      
        alert('Please enter a valid message');
      } else {
        console.log('im here');
        console.log('input: ', inputMsg.value);
        this.props.actions.postMessages(1, 1, inputMsg.value); //(fridgeId, messageId)
        inputMsg.value = '';
        inputMsg1.value = '';
      }
    }

    
    const { messageList, messageFetched, messageFetching, actions } = this.props;

    // if (messageList.length > 0) {
      // console.log('view before/after reducer: ', messageList);
      // console.log('what is handlesubmit: ', handleSubmit);
      return (
        <div>
          <h3 className="ui dividing header">Messages</h3>
          <Form>
            <Form.Group inline>
              <Form.Input 
                type="text"
                label="Message:"
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
          {messageList.map(message => (
            <MessageListEntry {...actions} key={message.id} message={message} />
          ))}
        </div>
      )
    // } else {
    //   return (
    //     <div>
    //       <h3 className="ui dividing header">Messages</h3>
    //       <Form>
    //         <Form.Group inline>
    //           <Form.Input
    //           type="text" 
    //           label="Message:"
    //           id="inputMsg1"
    //           placeholder="Enter message here" />
    //           <Form.Button 
    //             onClick={(e) => {
    //               e.preventDefault();
    //               handleSubmit();
    //             }}
    //             content="Submit"
    //           />
    //         </Form.Group>
    //       </Form>
    //     </div>

    //   )
    // }
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