import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReduser from './reducer';

const rootReducer = combineReducers({
  users: contactsReduser,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
