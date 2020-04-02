import React, { useState } from "react";
import { useQuery } from "graphql-hooks";
import { BOOK_QUERY } from "../queries/Book_Queries";
import BookDetails from "../component//BookDetails";

const Booklist = () => {
  const { loading, error, data } = useQuery(BOOK_QUERY);
  const [bookid, SetId] = useState("");
  if (loading) return "Loading Books...";
  if (error) return "Something Bad Happened";
  const { books } = data;
  const onClick = id => {
    SetId(id);
  };
  return (
    <div className="books">
      <ul className="bookitems ml-4">
        {books.map(book => (
          <li key={book.id} onClick={() => onClick(book.id)}>
            {book.name}
          </li>
        ))}
      </ul>
      {bookid && <BookDetails bookid={bookid} />}
    </div>
  );
};

export default Booklist;
