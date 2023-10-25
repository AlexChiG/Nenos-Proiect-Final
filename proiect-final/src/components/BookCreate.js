import React, { useState } from 'react';
// import Snackbar from "./Snackbar";

function BookCreate({onCreate}) {
const [title, setTile] = useState('');

const handleChange = (event) => {
  setTile(event.target.value);
}

const handleSubmit = (event) => {

  // Prevent the default behavior of the form of refreshing the page
  event.preventDefault();
  onCreate(title);

  // Clear the input after submit
  setTile('');

}

  return (
    <div className="book-create">
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange}/>
        <button className="button">Create!</button>
      </form>
    </div>
  );
}

export default BookCreate;
