import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

function Navbar() {
  const { books } = useContext(BookContext);

  return (
    <div className="navbar">
      <h1>My Reading List</h1>
      <p>Currently you have {books.length} books to read...</p>
    </div>
  );
}

export default Navbar;
