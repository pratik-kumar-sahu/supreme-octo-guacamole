import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const BookContext = createContext();

function BookContextProvider() {
  const [books, setBooks] = useState([
    { title: "The Immortals of Meluha", author: "Amish Tripathy", id: 1 },
    { title: "2 States", author: "Chetan Bhagat", id: 2 },
  ]);

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuidv4() }]);
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, deleteBook }}>
      {props.children}
    </BookContext.Provider>
  );
}

export default BookContextProvider;
