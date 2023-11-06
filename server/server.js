const express = require("express")
const cors = require("cors")
require("dotenv").config()
const app = express()
app.use(cors())
const PORT = 8080;
import axios from "axios";
const mongoose = require("mongoose")


app.get("/", (_, response) => response.json("You are looking at my root route")






app.listen(PORT, () => console.log(`App is running on port ${PORT}`);
