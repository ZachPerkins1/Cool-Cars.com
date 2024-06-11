import express from 'express';
import multer from 'multer';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import pool from './database/database.js';

const app = express();
const PORT = process.env.PORT || 3000;


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Serve static files from the uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(express.static(path.join(__dirname, 'dist')));
//ONLY USING CORS FOR DEV PURPOSES
app.use(cors())

// Set up multer for handling file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

//ROUTE TO GET ALL CARS
app.get('/cars', async (req, res) => {
    const result = await pool.query('SELECT * FROM cars');
    res.json(result.rows)
});

app.get('/colors', async (req, res) => {
    const result = await pool.query('SELECT * FROM colors');
    res.json(result.rows)
});

//Route to get all reviews
app.get('/reviews', async (req, res) => {
    const result = await pool.query('SELECT * FROM reviews');
    res.json(result.rows)
});

//route to make a new reivew
app.post('/reviews', upload.single('avatar'), async (req, res) => {
    const { name, rating, review } = req.body;
    const avatar = req.file ? `/uploads/${req.file.filename}` : null;

    try {
        await pool.query(
            'INSERT INTO reviews (name, rating, review, avatar) VALUES ($1, $2, $3, $4)',
            [name, rating, review, avatar]
        );
        res.status(201).send('Review added successfully');
    } catch (error) {
        console.error('Error adding review:', error);
        res.status(500).send('Server error');
    }
});

// GET User Favorites
app.get('/favorites', async (req, res) => {
    const userId = req.query.userId;
    try {
        const result = await pool.query('SELECT * FROM cars JOIN userfavorites ON cars.id = userfavorites.car_id WHERE user_id = $1', [userId]); 
        res.json(result.rows);
    } catch (error) {
        console.error('Error getting favorites:', error);
        res.status(500).send('Server error');}
});

// POST User Favorited Car
app.post('/favorites', async (req, res) => {
    console.log('req.body:', req.body);
    const { userId, carId } = req.body;
    try {
        await pool.query(
            'INSERT INTO userfavorites (user_id, car_id) VALUES ($1, $2)',
            [userId, carId]
        );
        res.status(201).send('Favorite added successfully');
    } catch (error) {
        console.error('Error adding favorite:', error);
        res.status(500).send('Server error');
    }
});

// DELETE User Favorited Car
app.delete('/favorites', async (req, res) => {
    const { userId, carId } = req.body;
    console.log('userId:', userId, 'carId:', carId);
    try {
        await pool.query(
            'DELETE FROM userfavorites WHERE user_id = $1 AND car_id = $2',
            [userId, carId]
        );
        res.status(200).send('Favorite deleted successfully');
    } catch (error) {
        console.error('Error deleting favorite:', error);
        res.status(500).send('Server error');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});