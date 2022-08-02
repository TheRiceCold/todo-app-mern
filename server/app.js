const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
