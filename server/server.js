const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
const PORT = 8080;
app.use(express.json());

const mongoose = require("mongoose");
const Book = require("./models/book");
mongoose.connect(process.env.DATABASE_URL);

app.get("/", (_, response) =>
  response.json("You are looking at my root route")
);

app.get("/books", async (request, response) => {
  const books = await Book.find(request.query);
  response.json(books);
});

app.post("/books", async (request, response) => {
  const newBook = await Book.create(request.body);
  response.json(newBook);
});

app.delete("/books/:id", async (request, response) => {
  const deletedBook = await Book.findByIdAndDelete(request.params.id);
  response.json(deletedBook);
});

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
