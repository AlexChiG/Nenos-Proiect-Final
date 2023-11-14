import React from 'react';
import BookShow from './BookShow';

function BookList({ books, onDelete, onEdit, updateBook, markDone }) {
  const renderedBooks = books.map((book) => {
    return (
      <BookShow key={book.id} onEdit={onEdit} onDelete={onDelete} book={book} updateBook={updateBook} markDone={markDone}/>
    );
  });
  return (
    <div className="book-list">
      {renderedBooks}
    </div>
  );
}

export default BookList;
