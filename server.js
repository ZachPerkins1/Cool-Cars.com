import express from 'express';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import pool from './database/database.js';

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, 'dist')));
//ONLY USING CORS FOR DEV PURPOSES
app.use(cors())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

//ROUTE TO GET ALL CARS
app.get('/cars', async (req, res) => {
    const result = await pool.query('SELECT * FROM cars');
    res.json(result.rows)
});

//Route to get all reviews
app.get('/reviews', async (req, res) => {
    const result = await pool.query('SELECT * FROM reviews');
    res.json(result.rows)
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});