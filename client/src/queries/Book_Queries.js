//all books
const BOOK_QUERY = `
  {
    books {
      name
      id
    }
  }
`;

const GET_BOOK_QUERY = `
  query($id:ID!){
    book(id:$id){
      id
      name
      genre
      author{
        id
        name
        age
        books{
          name
          id
        }
      }
    }
  }
`;

const ADD_BOOK_MUTATION = `
  mutation($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      id
      name
    }
  }
`;

export { BOOK_QUERY, ADD_BOOK_MUTATION, GET_BOOK_QUERY };
