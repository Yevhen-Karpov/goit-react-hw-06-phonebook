import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsActions from '../../redux/actions';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.listItem} key={id}>
          <p className={s.listItemText}>
            {name}: <span className={s.listItemText}>{number}</span>
          </p>
          <button
            className={s.button}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = state => {
  const { filter, contacts } = state.users;

  const normalizedFilter = filter.toLowerCase();

  const getVisibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );

  return { contacts: getVisibleContacts };
};

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
