import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Book from "./pages/Book";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const admins = [
    "tim.smith@techeducators.co.uk",
    "rick.astley@techeducators.co.uk",
  ];

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
      await axios.delete(API);
      alert("This book has been deleted.");
      getBooks();
    }
  }

  return (
    <BrowserRouter>
      <header>
        {isAuthenticated && (
          <div>
            <Profile />
            <LogoutButton />
          </div>
        )}
        {!isAuthenticated && <LoginButton />}

        <h1>Can of Books</h1>
        <p>The ultimate book Database</p>
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <Home books={books} setBooks={setBooks} deleteBook={deleteBook} />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/book/:id" element={<Book />} />
      </Routes>

      <footer>
        <p>Can of Books &copy;</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
