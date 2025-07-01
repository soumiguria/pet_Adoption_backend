const Pet = require("../models/pet");

const postPets = async (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const price = req.body.price;
  const imageUrl = req.body.imageUrl;
  const type = req.body.type;

  const pet = await Pet.create({
    name: name,
    age: age,
    price: price,
    type: type,
    imageUrl: imageUrl,
  });

  res.json({ pet: pet });
};

const getPets = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const pets = await Pet.find().skip(skip).limit(limit).lean();

    const sanitizedPets = pets.map((pet) => ({
      id: pet._id?.toString() || "",
      name: pet.name || "Unnamed Pet",
      type: pet.type || "Unknown",
      age: pet.age || 0,
      price: pet.price || 0,
      imageUrl: pet.imageUrl || "",
      isAdopted: !!pet.isAdopted,
      isFavorite: !!pet.isFavorite,
    }));

    res.status(200).json(sanitizedPets);
  } catch (error) {
    console.error("Error fetching pets:", error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { postPets: postPets, getPets: getPets };
