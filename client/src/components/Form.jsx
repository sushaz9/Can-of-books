import { useState } from "react";
import axios from "axios";

export default function Form({ books, setBooks, book, setBook }) {
  const [formData, setFormData] = useState(
    book ?? {
      title: "",
      description: "",
      author: "",
      status: false,
      imgUrl: "",
    }
  );

  function handleChange(event) {
    if (event.target.type === "checkbox") {
      setFormData({ ...formData, [event.target.name]: event.target.checked });
    } else {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    }
  }

  async function addBook(event) {
    event.preventDefault();
    const API = "http://localhost:8080/books";
    const res = await axios.post(API, formData);
    setBooks([...books, res.data]);
  }

  async function updateBook(event) {
    event.preventDefault();
    const API = `http://localhost:8080/books/${book._id}`;
    await axios.put(API, formData);
    setBook(formData);
  }

  return (
    <form onSubmit={book?.title ? updateBook : addBook}>
      <input
        name="title"
        placeholder="title"
        onChange={handleChange}
        value={formData.title}
      />
      <input
        name="description"
        placeholder="description"
        onChange={handleChange}
        value={formData.description}
      />
      <input
        name="author"
        placeholder="author"
        onChange={handleChange}
        value={formData.author}
      />
      <input
        name="imgUrl"
        placeholder="imgUrl"
        onChange={handleChange}
        value={formData.imgUrl}
      />
      <input
        name="status"
        type="checkbox"
        onChange={handleChange}
        checked={formData.status}
      />
      <button>{book?.title ? "Update Book" : "Add Book"}</button>
    </form>
  );
}
