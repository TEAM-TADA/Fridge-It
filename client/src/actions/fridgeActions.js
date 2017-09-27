import axios from 'axios';

export function getFridge(id) {
  return function(dispatch) {
    axios.get('/api/fridge/' + id)
      .then(({ data }) => {
        dispatch({type: 'FETCH_FRIDGE_FULFILLED', payload: data})
      })
      .catch(err => { 
        dispatch({type: 'FETCH_FRIDGE_REJECTED', payload: err})
      })
  }
}

export function addFridge(fridge) {
  return function(dispatch) {
    axios.post('/api/fridge', {
      users: fridge.users,
      name: fridge.name
    })
      .then(({ data }) => {
        dispatch({type: 'POST_FRIDGE_FULFILLED', payload: data})
      })
      .catch(err => {
        dispatch({type: 'POST_FRIDGE_REJECTED', payload: data})
      })
  }
}

// export function deleteFridge(fridge) {
//   return function(dispatch) {
//     axios.delete('/fridge/:{fridge.id}') 
//       .then({ data }) 
//   }
// }