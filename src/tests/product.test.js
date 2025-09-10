const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');
const Product = require('../models/product');
const { MongoMemoryServer } = require('mongodb-memory-server');
let mongoServer;


jest.setTimeout(6000000); 

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongoServer.stop();
});

beforeEach(async () => {
  await Product.deleteMany();
});

describe('Product API', () => {
  it('should create a new product', async () => {
    const res = await request(app)
      .post('/api/products')
      .send({
        name: 'Test Phone',
        description: 'A great phone',
        price: 299,
        category: 'Electronics'
      });
    expect(res.statusCode).toBe(201);
    expect(res.body.data).toHaveProperty('_id');
    expect(res.body.data.name).toBe('Test Phone');
  });

  it('should return products with filters applied', async () => {
    await Product.create([
      { name: 'Shirt', price: 30, category: 'Clothing' },
      { name: 'Laptop', price: 1000, category: 'Electronics' }
    ]);

    const res = await request(app).get('/api/products?category=Clothing');
    expect(res.statusCode).toBe(200);
    expect(res.body.data.length).toBe(1);
    expect(res.body.data[0].name).toBe('Shirt');
  });
});