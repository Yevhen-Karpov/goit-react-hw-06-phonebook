import types from './tipes';
import { v4 as uuidv4 } from 'uuid';

const addContact = (name, number) => ({
  type: types.ADD_CONTACT,
  payload: { id: uuidv4(), name: name, number: number },
});

const deleteContact = userId => ({
  type: types.DELETE_CONTACT,
  payload: userId,
});

const changeFilter = value => ({
  type: types.CHANGE_FILTER,
  payload: value,
});
export default { addContact, deleteContact, changeFilter };
