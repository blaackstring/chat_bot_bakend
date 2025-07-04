  import express from 'express';
  import cors from 'cors';
  import authroute from './routes/authRoute';
  import cookieParser from 'cookie-parser';
  import { DbConnection } from './config/Db';
  import dotenv from 'dotenv'

  dotenv.config()

  const app = express();


  app.use(cors(
  {
    origin:'https://zerocode-fe-assignment-tw2y.vercel.app',
    credentials:true
  }
  ));
  app.use(express.json());
  app.use(cookieParser());
  console.log(process.env.MONGO_URL)
  DbConnection()

  // Example Route
  app.use('/api/v1/auth', authroute);

  // Start Server
export default app;
