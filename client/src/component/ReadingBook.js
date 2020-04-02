import React from "react";
import Booklist from "./Booklist";
import AddBook from "./AddBook";

const ReadingBook = () => {
  return (
    <div className="container">
      <h1 className="mt-5 ">Reading Books</h1>
      <Booklist />
      <AddBook />
    </div>
  );
};

export default ReadingBook;
