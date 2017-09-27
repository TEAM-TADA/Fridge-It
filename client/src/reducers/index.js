import { combineReducers } from 'redux';

import message from './messageReducers';
import search from './searchReducers';
import fridge from './fridgeReducers';
import items from './itemReducers';

const FridgeApp = combineReducers({
  message,
  search,
  fridge,
  items,
});

export default FridgeApp;