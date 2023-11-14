import React, { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import CustomSnackbar from "./components/CustomSnackbar";
import FormControlLabel from "@mui/material/FormControlLabel";

import MaterialUISwitch from "./components/LightDarkSwitch";

import "./App.css";
import "./styles/light.css";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    if (title !== "") {
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
    } else {
      handleOpenSnackbar("Must enter a title", "error");
    }
  };

  const deleteBookById = (id) => {
    const result = window.confirm("Are you sure you want to delete this book?");
    if (result) {
      const updatedBooks = books.filter((book) => {
        handleOpenSnackbar("Entry deleted.", "success");
        return book.id !== id;
      });
      setBooks(updatedBooks);
    } else {
      handleOpenSnackbar("Deletion cancelled.", "error");
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
  // Bulk Operations

  const handleBulkDelete = () => {
    const result = window.confirm("Are you sure you want to delete this book?");
    if (result) {
      const updatedBooks = books.filter((book) => {
        handleOpenSnackbar("Entry deleted.", "success");
        return !book.isChecked;
      });
      console.log(updatedBooks);
      setBooks(updatedBooks);
    } else {
      handleOpenSnackbar("Deletion canceled.", "error");
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
    handleOpenSnackbar("Tasks marked as done.", "success");
    console.log(updatedBooks);
    setBooks(updatedBooks);
  };

  // light / dark theme
  const [theme, switchTheme] = useState("dark");

  const toggleTheme = () => {
    switchTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  // mark tasks as done by clicking on them

  const markDone = (id) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        handleOpenSnackbar("Task done status changed.", "success");
        return { ...book, isDone: !book.isDone };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  // filters

  //const [oldBooks, setOldBooks] = useState([]);

  const showAll = () => {
    // crash
    // if (Object.keys(oldBooks).length === 0) {
    //   setBooks(oldBooks);
    //   setOldBooks("");
    //   console.log("test");
    // }
    // console.log(oldBooks);
  };

  const showDone = () => {};

  const showUndone = () => {};

  return (
    <div className="App" id={theme}>
      <BookList
        onEdit={editBookById}
        books={books}
        onDelete={deleteBookById}
        updateBook={updateBooks}
        markDone={markDone}
      />
      <BookCreate onCreate={createBook} />
      <CustomSnackbar
        open={snackbarOpen}
        message={snackbarMessage}
        handleClose={handleCloseSnackbar}
        setSeverity={severity}
      />
      <div className="control">
        <button onClick={markTaskDone}>Mark Tasks as "Done"</button>
        <button onClick={handleBulkDelete}>Bulk Delete</button>
        <FormControlLabel
          control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
          onChange={toggleTheme}
        />
      </div>
      <div className="filter">
        <button onClick={showAll}>Show All Tasks</button>
        <button onClick={showDone}>Show Done Tasks</button>
        <button onClick={showUndone}>Show Undone Tasks</button>
      </div>
    </div>
  );
}

export default App;
