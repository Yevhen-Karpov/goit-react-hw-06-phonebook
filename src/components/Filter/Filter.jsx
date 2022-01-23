import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import contactsActions from '../../redux/actions';
import s from './Filter.module.css';

export default function Filter() {
  const value = useSelector(state => state.users.filter);
  const dispatch = useDispatch();
  const onChange = e =>
    dispatch(contactsActions.changeFilter(e.currentTarget.value));

  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
