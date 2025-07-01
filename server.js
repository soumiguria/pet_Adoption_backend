require("dotenv").config();

const express = require("express");
const connectToDb = require("./config/connectToDb");
const Pet = require("./models/pet");
const cors = require("cors");
const { postPets, getPets } = require("./controllers/pet");

const app = express();

connectToDb();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ hello: "world" });
});

app.post("/pets", postPets);

app.get("/pets", getPets);

app.listen(process.env.PORT);
