import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import NavBar from './components/NavBar.jsx';
import CarCard from './components/CarCard.jsx';
import axios from 'axios';

function Wishlist() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/cars')
            .then((response) => {
                console.log("car data", response.data)
                setCars(response.data)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);


    return (
        <>
            <NavBar />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mt: 2 }}>
                <Typography variant="h4" component="div">Wishlist</Typography>
                <Box sx={{ display: 'flex', gap: 4, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', mt: 2 }}>
                    {cars.map(car => <CarCard key={car.id} car={car} />)}
                </Box>
                <Link to={`/`}>
                    <button variant="contained" style={{ marginTop: 100 }}>Link to Home.</button>
                </Link>
            </Box>
        </>
    )
}

export default Wishlist