import pkg from 'pg';
const { Pool } = pkg;
import * as dotenv from "dotenv";
dotenv.config({});

const credentials = {
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
  };
  
const pool = new Pool(credentials);

export default pool;