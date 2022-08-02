const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT;
const todoRoutes = require("./routes/todos");

mongoose.connect(process.env.DB_CONNECT)
  .then(() => console.log("Database Connected"))
  .catch(error => console.log(error));

app.use("/", todoRoutes);

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
