import app from './server.js'
import { DbConnection } from './config/Db.js';
import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT || 3000;

DbConnection();

app.listen(PORT, () => {
  console.log(`🚀 Server listening onnn http://localhost:${PORT}`);
});
