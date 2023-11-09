import { Link } from "react-router-dom";
import Form from "../components/Form";

export default function Home({ books, setBooks, deleteBook }) {
  return (
    <div>
      {books.map((book) => {
        return (
          <div key={book._id}>
            <Link to={`/book/${book._id}`}>
              <h2>{book.title}</h2>
            </Link>
            <p>{book.description}</p>
            <p>{book.author}</p>
            <p>Read: {book.status ? "✅" : "❌"}</p>
            <img src={book.imgUrl} />

            <button onClick={() => deleteBook(book._id)}>Delete Book</button>
          </div>
        );
      })}
      ;
      <Form books={books} setBooks={setBooks} />;
    </div>
  );
}
