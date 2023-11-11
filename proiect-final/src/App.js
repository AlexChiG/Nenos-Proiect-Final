import React, { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import CustomSnackbar from "./components/CustomSnackbar";
import CustomDialog from "./components/CustomDialog";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    if (title !== "") {
      if (DialogResult) {
        const updatedBooks = [
          ...books,
          {
            id: Math.round(Math.random() * 9999),
            title,
            isChecked: false,
            isDone: false,
          },
        ];
        setBooks(updatedBooks);
        handleOpenSnackbar("Entry added", "success");
      }
    } else {
      handleOpenSnackbar("Must enter a title", "error");
    }
  };

  const deleteBookById = (id) => {
    const result = window.confirm("Are you sure you want to delete this book?");
    if (result) {
      const updatedBooks = books.filter((book) => {
        handleOpenSnackbar("Entry deleted", "success");
        return book.id !== id;
      });
      setBooks(updatedBooks);
    }
  };

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        handleOpenSnackbar("Entry modified", "success");
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  //SnackBar

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [severity, setSeverity] = useState("");

  const handleOpenSnackbar = (message, severity) => {
    setSnackbarMessage(message);
    setSeverity(severity);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
    setSnackbarMessage("");
  };

  // Dialog

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [DialogContent] = useState("");
  const [DialogResult, setDialogResult] = useState(true);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const yesDialogResult = () => {
    setDialogResult(true);
    closeDialog();
  };

  const noDialogResult = () => {
    setDialogResult(false);
    closeDialog();
  };

  // Bulk Operations

  const handleBulkDelete = () => {
    const result = window.confirm("Are you sure you want to delete this book?");
    if (result) {
      const updatedBooks = books.filter((book) => {
        handleOpenSnackbar("Entry deleted", "success");
        return !book.isChecked;
      });
      console.log(updatedBooks);
      setBooks(updatedBooks);
    }
  };

  const updateBooks = (id, state) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, isChecked: state };
      }
      console.log(book);
      return book;
    });
    setBooks(updatedBooks);
  };

  const markTaskDone = () => {
    const updatedBooks = books.map((book) => {
      if (book.isChecked === true) {
        return { ...book, isDone: !book.isDone };
      }
      console.log(book);
      return book;
    });
    console.log(updatedBooks);
    setBooks(updatedBooks);
  };

  return (
    <div className="App">
      <BookList
        onEdit={editBookById}
        books={books}
        onDelete={deleteBookById}
        updateBook={updateBooks}
      />
      <BookCreate onCreate={createBook} />
      <CustomSnackbar
        open={snackbarOpen}
        message={snackbarMessage}
        handleClose={handleCloseSnackbar}
        setSeverity={severity}
      />

      <button onClick={markTaskDone}>Mark Books as "Done"</button>
      <button onClick={handleBulkDelete}>Bulk Delete</button>

      <button onClick={openDialog}>Open Dialog</button>
      <CustomDialog
        open={isDialogOpen}
        onYes={yesDialogResult}
        onNo={noDialogResult}
        title="Confirm changes?" //{DialogTitle}
        content={DialogContent}
      />
    </div>
  );
}

export default App;