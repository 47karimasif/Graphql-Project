import React from "react";
import { useQuery } from "graphql-hooks";
import { GET_BOOK_QUERY } from "../queries/Book_Queries";

const BookDetails = ({ bookid }) => {
  const { data, loading } = useQuery(GET_BOOK_QUERY, {
    variables: { id: bookid }
  });
  if (loading) return "Loading Book Info...";
  console.log(data);
  const { book } = data;
  return (
    <div id="Book-detail">
      <h4>Output Book Details here</h4>
      <div className="Book-Info">
        <h2>{book.name}</h2>
        <p>{book.genre}</p>
        <p>{book.author.name}</p>
        <p>All books by this author</p>
        <ul className="author-books">
          {book.author.books.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookDetails;
