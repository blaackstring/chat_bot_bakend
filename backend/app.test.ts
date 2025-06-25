import request from 'supertest';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config({ path: '.env.test' });
import app from './server'; // adjust path as needed
import { describe, it, expect } from '@jest/globals';

describe('Basic App Routes', () => {
  it('Root access should return 404 because no route handler on root /', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(404);
  });

  it('should throw error if SECKEY is missing', () => {
    process.env.SECKEY = undefined; // simulate missing key

    expect(() => {
      jwt.sign({ id: '123' }, process.env.SECKEY!);
    }).toThrow(); // expected to fail
  });

  it('Request on Auth root handler /api/v1/auth', async () => {
    const res = await request(app).get('/api/v1/auth');
    expect(res.statusCode).toBe(404);
  });
});
