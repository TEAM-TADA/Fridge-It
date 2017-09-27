import axios from 'axios';

export const fetchMessages = (fridgeId) => {
  return function(dispatch) {
    axios.get('/api/allMessages/' + fridgeId)
    .then((response) => {
      dispatch({type: 'FETCH_MESSAGES_FULFILLED', payload: response.data});
    })
    .catch((err) => {
      dispatch({type: 'FETCH_MESSAGES_REJECTED', payload: err});
    });
  };
};
 
export const postMessages = (fridgeId, userId, messages) => {
  return function(dispatch) {
    axios.post('/api/allMessages', {
      data: {
        messages: messages,
        fridgeId: fridgeId,
        userId: userId,
      }
    })
    .then((response) => {
      dispatch({type: 'POST_MESSAGES_FULFILLED', payload: response.data});
    })
    .catch((err) => {
      dispatch({type: 'POST_MESSAGES_REJECTED', payload: err});
    });
  };
};

export const deleteMessages = (messageId) => {
  return function(dispatch) {
    axios.delete('/api/allMessages/' + messageId)
    .then((response) => {
      console.log('delete payload: ', response.data);
      dispatch({type: 'DELETE_MESSAGES_FULFILLED', payload: response.data});
    })
    .catch((err) => {
      dispatch({type: 'DELETE_MESSAGES_REJECTED', payload: err});
    });
  };
};

export const updateMessage = (id) => {
  return function(dispatch) {
    axios.patch('/api/allMessages/' + id)
    .then((response) => {
      dispatch({type: 'UPDATE_MESSAGES_FULFILLED', payload: response.data});
    })
    .catch((err) => {
      dispatch({type: 'UPDATE_MESSAGES_REJECTED', payload: err});
    });
  };
};
