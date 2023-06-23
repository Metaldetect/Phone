import React, { useState } from "react";

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && phone) {
      const newContact = {
        id: Date.now(),
        name,
        phone,
      };
      addContact(newContact);
      setName("");
      setPhone("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="needs-validation w-25 mx-auto">
      <div className="mb-3">
        <input
          id="floatingInput"
          type="text"
          className="form-control"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="floatingInput"></label>
        <div className="invalid-feedback">Please enter a name.</div>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <input
          id="floatingPhone"
          type="text"
          className="form-control mb-4"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <label htmlFor="floatingPhone"></label>
        <div className="invalid-feedback">Please enter a phone number.</div>
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary mb-4" type="submit">
          Add Contact
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
