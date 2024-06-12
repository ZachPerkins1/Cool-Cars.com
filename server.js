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
    const result = await pool.query(`
    SELECT 
	Cars.id, name, mileage, arrival_date, year,
	price, availability, date_sold, 
	image_id, review_id, color, make, 
	model, body_style, fuel_type
	FROM Cars 
	JOIN Colors ON Cars.color_id=Colors.id
	JOIN Makes ON Cars.make_id=Makes.id
	JOIN Models ON Cars.model_id=Models.id
	JOIN Bodies ON Cars.body_id=Bodies.id
	JOIN Fueltype ON Cars.fuel_id=Fueltype.id;
    `);
    res.json(result.rows)
});

app.get('/colors', async (req, res) => {
    const result = await pool.query('SELECT * FROM colors');
    res.json(result.rows)
});

app.get('/models', async (req, res) => {
    const result = await pool.query('SELECT * FROM models');
    res.json(result.rows)
});

app.get('/fuels', async (req, res) => {
    const result = await pool.query('SELECT * FROM fueltype');
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

app.patch('/availability/:id', async (req, res) => {
    let id = (req.params.id)
    const result = await pool.query(`UPDATE Cars SET Availability = NOT Availability WHERE id = ${id}`);
    res.json(result)
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});