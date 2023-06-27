import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactForm/ContactList';
import Filter from './ContactForm/Filter';


const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    if (contacts.some((contact) => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`"${name}" is already in contacts.`);
    } else {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };
      setContacts((prevContacts) => [...prevContacts, newContact]);
    }
  };

  const deleteContact = (id) => {
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />

      <h2>Contacts</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
};

export default App;