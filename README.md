# Product Catalog API

A simple RESTful API for managing a product catalog.  
Built with **Node.js, Express, MongoDB, Jest, and GitHub Actions**.

---

## 🚀 Features
- Create, Read, Update, Delete (CRUD) products
- Search & filter products by name, category, and price range
- Unit tests with Jest & Supertest
- API documentation via Postman collection
- CI/CD pipeline with GitHub Actions

---

## 📂 Project Structure

product-catalog/
├─ src/
│ ├─ app.js # Express app
│ ├─ index.js # Entry point
│ ├─ models/ # Mongoose models
│ ├─ controllers/ # Route handlers
│ └─ routes/ # Express routes
├─ tests/ # Jest test files
├─ .github/workflows/ # GitHub Actions workflows
├─ package.json
└─ README.md


---

## ⚙️ Setup & Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/product-catalog.git
   cd product-catalog

2. Install dependencies:
npm install

3. Create .env file in root:
PORT=3000
MONGO_URI=mongodb+srv://product-catalog:1vMXdCGKg3RUPrMl@cluster0.aeggcsz.mongodb.net/


4. Start the server:
npm start

API Endpoints

Base URL: http://localhost:3000/api/products

Method	Endpoint	Description
POST	/	Create product
GET	/	Get all products (with filters)
GET	/:id	Get product by ID
PUT	/:id	Update product by ID
DELETE	/:id	Delete product by ID


Run unit tests:

npm test

Postman Documentation: https://documenter.getpostman.com/view/30119290/2sB3HnMLYN
