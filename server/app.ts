import express from "express";
import mongoose from "mongoose";

require("dotenv").config({ path: __dirname + "/.env"});

const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.json());

app.listen(PORT, () => { 
  console.log(`listening on http://localhost:${PORT}`);
  mongoose.connect(process.env.DB_CONNECT)
    .then(() => console.log("Database Connected"))
    .catch(error => console.log(error));
});
