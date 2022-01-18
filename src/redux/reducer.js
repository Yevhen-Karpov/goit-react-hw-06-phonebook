import { combineReducers } from 'redux';
import types from './tipes';

const contacts = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD_CONTACT:
      return [...state, payload];

    case types.DELETE_CONTACT:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};
const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};
// const name = (state = '', action) => {
//   return state;
// };
// const number = (state = '', action) => {
//   return state;
// };
export default combineReducers({
  contacts,
  filter,
  //   name,
  //   number,
});
