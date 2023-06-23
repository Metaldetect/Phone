import React from "react";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className="list-group">
      {contacts.map((contact) => (
        <li
          key={contact.id}
          className="list-group-item d-flex justify-content-between align-items-center w-25 mx-auto"
        >
          <span>{contact.name}</span>
          <span>{contact.phone}</span>
          <button
            className="btn btn-warning"
            onClick={() => deleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
