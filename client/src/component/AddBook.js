import React, { useState } from "react";
import { useQuery, useMutation } from "graphql-hooks";
import { AUTHOR_QUERY } from "../queries/Author_Queries";
import { ADD_BOOK_MUTATION } from "../queries/Book_Queries";

const AddBook = props => {
  const { loading, data } = useQuery(AUTHOR_QUERY);
  const [Book, SetBook] = useState({
    name: "",
    genre: "",
    authorId: ""
  });

  const onChange = e => {
    SetBook({
      ...Book,
      [e.target.id]: e.target.value
    });
  };

  //AddBook Mutation function
  const [addbook] = useMutation(ADD_BOOK_MUTATION);

  const onSubmit = async e => {
    // e.preventDefault();
    await addbook({ variables: Book });
  };

  return (
    <div id="Add-Book" className="my-5 ">
      <form onSubmit={onSubmit}>
        <div className="form-item my-3">
          <label className="mr-3">Book Name</label>
          <input
            type="text"
            placeholder="Book-Name"
            id="name"
            onChange={onChange}
          ></input>
        </div>
        <div className="form-item my-3">
          <label className="mr-3">Genre</label>
          <input
            type="text"
            placeholder="Genre"
            id="genre"
            onChange={onChange}
          ></input>
        </div>
        <div className="form-item my-3">
          <label className="mr-3">Author</label>
          <select id="authorId" onChange={onChange}>
            {!loading && <option>Select Author</option>}
            {loading ? (
              <option disabled>Loading Authors...</option>
            ) : (
              data.authors.map(author => (
                <option key={author.id} value={author.id}>
                  {author.name}
                </option>
              ))
            )}
          </select>
        </div>
        <button className="btn btn-primary">Add New Book</button>
      </form>
    </div>
  );
};

export default AddBook;
