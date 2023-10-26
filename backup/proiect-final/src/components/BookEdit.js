import React, { useState } from "react";

function BookEdit({ book, onEdit, onSubmit, onCancel }) {
  const [title, setTitle] = useState(book.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const result = window.confirm("Are you sure you want perform this modification?");
    if (result) {
      onEdit(book.id, title);
      onSubmit();
    } else {
      onCancel();
    }
  };

  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange} />
      <button className="button is-primary">Update</button>
    </form>
  );
}

export default BookEdit;
