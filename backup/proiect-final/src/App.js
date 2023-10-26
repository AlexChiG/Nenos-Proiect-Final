import React, { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
// import Snackbar from "./components/Snackbar";
import CustomSnackbar from "./components/CustomSnackbar";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    if(title !== '') {
    // console.log('add a book with title: ', title)
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title },
    ];
    // Bad code
    // books.push({id: 123, title: title})
    setBooks(updatedBooks);
    handleOpenSnackbar('Entry added','success')
    } else {
      handleOpenSnackbar('Must enter a title','error')
    }
  };

  const deleteBookById = (id) => {
    const result = window.confirm(
      "Are you sure you want to delete this book?"
    );
    if (result) {
      const updatedBooks = books.filter((book) => {
        handleOpenSnackbar('Entry deleted','success')
        return book.id !== id;
      });
      setBooks(updatedBooks);
    }
  };

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        handleOpenSnackbar('Entry added','success')
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  //SnackBar

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [severity, setSeverity] = useState('');

  const handleOpenSnackbar = (message, severity) => {
    setSnackbarMessage(message);
    setSeverity(severity);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
    setSnackbarMessage('');
  };

  return (
    <div className="App">
      <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
      {/* <Snackbar /> */}
      {/* <button onClick={() => handleOpenSnackbar('Button Clicked!')}>Show Snackbar</button> */}

      {/* Render the Snackbar component */}
      <CustomSnackbar open={snackbarOpen} message={snackbarMessage} handleClose={handleCloseSnackbar} setSeverity={severity}/>
    </div>
  );
}

export default App;
