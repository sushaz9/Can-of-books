const mongoose = require("mongoose");
require("dotenv").config();
const Book = require("./models/book");

mongoose.connect(process.env.DATABASE_URL);

async function seed() {
  await Book.create([
    {
      title: "The Shining",
      description:
        "Jack Torrance (Jack Nicholson) becomes winter caretaker at the isolated Overlook Hotel in Colorado, hoping to cure his writer's block.",
      imgUrl:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTzNdzvZ8vr6utupRB1wOtfg6hH-x9ju7-F9ZaE7qxTl7836-0DABJOTqkhMbc9J20lF-1NTqcjFAXG6r7uavUcLRF5nGJ5QZTKlVFq8WM&usqp=CAE",
    },

    {
      title: "What I Learned Losing A Million Dollars",
      description:
        "Short and to the point, this book very clearly lays out how investors make fatal mistakes. With blunt honesty Paul shows us how he lost a fortune after a decades long career, and his lessons on risk are unforgettable.",
      imgUrl:
        "https://target.scene7.com/is/image/Target/GUEST_6651c43e-7370-4f0d-9cb0-aeea0002d33e?wid=488&hei=488&fmt=pjpeg",
    },

    {
      title: "Jaws",
      description:
        "When a killer shark unleashes chaos on a beach community off Cape Cod, it's up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down.",
      imgUrl:
        "https://m.media-amazon.com/images/I/51sd9yvFPBL._SY445_SX342_.jpg",
    },
  ]);

  console.log("Book created");
  mongoose.disconnect();
}

seed();
