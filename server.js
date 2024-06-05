import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import pool from './database/database.js';

// EXAMPLE QUERY
// const result = await pool.query('SELECT * FROM cars')
// console.log(result.rows[0].name) 

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.get('/cars', async (req, res) => {
    const result = await pool.query('SELECT * FROM cars');
    res.send(result)
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});