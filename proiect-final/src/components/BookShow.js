import React, { useState } from "react";
import BookEdit from "./BookEdit";
import Checkbox from "@mui/material/Checkbox";

function BookShow({ book, onDelete, onEdit, updateBook }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = () => {
    setShowEdit(false);
  };

  const disableEdit = () => {
    setShowEdit(false);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = (
      <BookEdit
        onSubmit={handleSubmit}
        onEdit={onEdit}
        book={book}
        onCancel={disableEdit}
      />
    );
  }

  //checkbox

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    book.isChecked = isChecked;
    updateBook(book.id, event.target.checked);
  };

  return (
    <div className="book-show">
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
        <Checkbox
          checked={isChecked}
          onChange={handleCheckboxChange}
          inputProps={{ "aria-label": "controlled" }}
        />
      </div>
    </div>
  );
}

export default BookShow;
