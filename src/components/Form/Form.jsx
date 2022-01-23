import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import contactsActions from '../../redux/actions';
import { getContacts } from '../../redux/selectors';
import s from './Form.module.css';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const onSubmit = (name, number) =>
    dispatch(contactsActions.addContact(name, number));

  const handleNameChange = ({ currentTarget: { value } }) => {
    setName(value);
  };

  const handleNumberChange = ({ currentTarget: { value } }) => {
    setNumber(value);
  };

  const handleAddContact = e => {
    e.preventDefault();
    const isRepeatContact = contacts.find(contact => contact.name === name);
    if (isRepeatContact) {
      alert(`${name} is already in contacts.`);
      resetState();
      return;
    }
    onSubmit(name, number);
    resetState();
  };

  const resetState = () => {
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form className={s.form} onSubmit={handleAddContact}>
        <label className={s.label}>
          Name
          <br />
          <input
            className={s.input}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleNameChange}
          />
        </label>
        <label className={s.label}>
          Number
          <br />
          <input
            className={s.input}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleNumberChange}
          />
        </label>
        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
}
