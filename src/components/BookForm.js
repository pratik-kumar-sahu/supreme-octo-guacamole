import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

function BookForm() {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_BOOK", book: { title, author } });
    setTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        value={title}
        required
      />
      <input
        type="text"
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author"
        value={author}
        required
      />
      <input type="submit" value="Add Book" />
    </form>
  );
}

export default BookForm;
