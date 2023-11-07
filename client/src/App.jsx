import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  async function getBooks() {
    const API = `http://localhost:8080/books`;
    const res = await axios.get(API);
    setBooks(res.data);
  }

  async function deleteBook(id) {
    const check = confirm("Are you sure?");
    if (check) {
      const API = `http://localhost:8080/books/${id}`;
      const res = await axios.delete(API);
      getBooks();
    }
  }

  return (
    <>
      <h1>Can of Books</h1>
      <p>The ultimate book Database</p>
      {books.map((book) => {
        return (
          <div key={book._id}>
            <h2>{book.title}</h2>
            <p>{book.description}</p>
            <p>{book.author}</p>
            <p>Read: {book.status ? "✅" : "❌"}</p>
            <img src={book.imgUrl} />
            <button onClick={() => deleteBook(book._id)}>Delete Book</button>
          </div>
        );
      })}
      <Form books={books} setBooks={setBooks} />
    </>
  );
}

export default App;
