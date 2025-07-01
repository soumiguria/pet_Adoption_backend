# 🐾 Pet Adoption Backend API

![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![Express](https://img.shields.io/badge/Express-4.x-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-6.x-green)

A high-performance backend API for pet adoption platforms with robust features for pet management, user favorites, and adoption tracking.

## 🌟 Features

- **RESTful API** with proper status codes
- **Pagination** & advanced filtering
- **Rate Limiting** for API protection
- **Caching** with Redis (optional)
- **API Documentation** with Swagger


### Base URL
[https://api.petadoption.com/v1](https://pet-adoption-x6hg.onrender.com/)


### Core Endpoints

| Endpoint                | Method | Description                          |
|-------------------------|--------|--------------------------------------|
| `/pets`                 | GET    | Get paginated list of pets           |
| `/pets`                 | POST   | Add new pet                          |

## 🚀 Quick Start

### Prerequisites
- Node.js 18.x+
- MongoDB 6.x+ 
- npm 9.x+

### Installation
# Clone repository
git clone https://github.com/soumiguria/pet_adoption_backend.git

cd pet_adoption_backend

# Install dependencies
npm install

# Set up environment variables
create a .env file at the root of the project

# Server
PORT=3000

# Database
MONGODB_URI=mongodb://localhost:27017/pet-adoption

# Development (with hot reload)
npm run dev


# An example json
{
"id": "6863a2c01c675161a4128c56",
"name": "Mandy",
"type": "Dog",
"age": 1,
"price": 6000,
"imageUrl": "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
"isAdopted": false,
"isFavorite": false
},
