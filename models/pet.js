const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  name: String,
  age: Number,
  price: Number,
  type: String,
  imageUrl: String,
  isAdopted: { type: Boolean, default: false },
  isFavorite: { type: Boolean, default: false },
});

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;
