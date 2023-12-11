const request = require('supertest');
const app = require('../app'); 

describe('GET /documentation.json', () => {
  it('should respond with status 200 and return the Swagger document', async () => {
    const response = await request(app).get('/documentation.json');
    expect(response.status).toBe(200);
  });
});

