import React, { useState } from "react";
import ContactForm from "./Components/ContactForm";
import ContactList from "./Components/ContactList";

const App = () => {
  const [contacts, setContacts] = useState([]);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  return (
    <div>
      <h1 className="d-flex justify-content-center align-items-center mb-5">
        Phonebook
      </h1>

      <ContactForm addContact={addContact} />
      <ContactList contacts={contacts} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
