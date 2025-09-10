const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');


const app = express();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);

// Test route 
app.get('/', (req, res) => {
  res.json({ message: 'Product Catalog API is running 🚀' });
});

module.exports = app;
