import request from 'supertest';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config({ path: '.env.test' });
import app from './server'; // or './server' depending on your export
import { describe, it } from 'node:test';

describe('Basic App Routes', () => {
//   it('should return 404 on root / route', async () => {
//     const res = await request(app).get('/');
//     expect(res.statusCode).toBe(4004);
//   });

//   it('should return 404 on /api/v1/auth if no GET route is defined', async () => {
//     const res = await request(app).get('/api/v1/auth');
//     expect(res.statusCode).toBe(404); // Unless you define a GET route at this path
//   

it('Root access it retrun 404 bcoz no route handler on root / ',async()=>{
    const res=await request(app).get('/');
    expect(res.statusCode).toBe(404)
});




it('should throw error if SECKEY is missing', () => {
  process.env.SECKEY = undefined; // simulate missing key

  expect(() => {
    jwt.sign({ id: '123' }, process.env.SECKEY!);
  }).toThrow(); // fail hone chahiye
});


it('request on Auth root handler / ',async()=>{
    const res=await request(app).get('/api/v1/auth');
    expect(res.statusCode).toBe(404); //
});


});



function expect(statusCode: number) {
    throw new Error('Function not implemented.');
}

