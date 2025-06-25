import request from 'supertest';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { describe, it, expect, beforeAll, jest } from '@jest/globals';

dotenv.config({ path: '.env.test' });

// ✅ MOCK the DbConnection function before importing app
jest.mock('./config/Db', () => ({
  DbConnection: jest.fn().mockResolvedValue(undefined!), // mock resolved promise
}));

import app from './server';
import { DbConnection } from './config/Db';

describe('Basic App Routes', () => {
  beforeAll(async () => {
    await DbConnection(); // this will call the mock
  });

  it('Root access should return 404 because no route handler on root /', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(404);
  });

  it('Request on Auth root handler /api/v1/auth', async () => {
    const res = await request(app).get('/api/v1/auth');
    expect(res.statusCode).toBe(404);
  });
});
