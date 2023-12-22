const request = require('supertest');
const app = require('../src/app');
const apiService = require('../src/services/apiService');

describe('API Routes', () => {
  let apiData;

  beforeAll(async () => {
    apiData = await apiService.getAllApis();
  });

  test('GET / - should return all APIs', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(apiData);
  });

  test('GET /:id - should return a single API', async () => {
    const res = await request(app).get(`/${apiData[0].id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(apiData[0]);
  });

  test('POST / - should create a new API', async () => {
    const newApi = {
      name: 'New API',
      description: 'This is a new API',
      link: 'https://newapi.com'
    };
    const res = await request(app).post('/').send(newApi);
    expect(res.statusCode).toEqual(201);
    expect(res.body.name).toEqual(newApi.name);
  });

  test('PUT /:id - should update an existing API', async () => {
    const updatedApi = {
      name: 'Updated API',
      description: 'This is an updated API',
      link: 'https://updatedapi.com'
    };
    const res = await request(app).put(`/${apiData[0].id}`).send(updatedApi);
    expect(res.statusCode).toEqual(200);
    expect(res.body.name).toEqual(updatedApi.name);
  });

  test('DELETE /:id - should delete an existing API', async () => {
    const res = await request(app).delete(`/${apiData[0].id}`);
    expect(res.statusCode).toEqual(204);
  });
});
