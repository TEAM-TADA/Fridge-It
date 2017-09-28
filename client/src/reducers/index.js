import { combineReducers } from 'redux';

import message from './messageReducers';
import search from './searchReducers';
import fridge from './fridgeReducers';
import items from './itemReducers';
import auth from './authReducers';

const FridgeApp = combineReducers({
  auth,
  message,
  search,
  fridge,
  items,
});

export default FridgeApp;