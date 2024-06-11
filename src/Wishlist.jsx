import { useState, useEffect } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import NavBar from './components/NavBar.jsx';
import CarCard from './components/CarCard.jsx';
import axios from 'axios';

function Wishlist() {
    const [cars, setCars] = useState([]);
    const [userId, setUserId] = useState(1); // TODO: Update this to use the logged in user's ID

    useEffect(() => {
        axios.get(`http://localhost:3000/favorites?userId=${userId}`)
            .then((response) => {
                console.log("favorites data: ", response.data);
                setCars(response.data)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    const handleDelete = (carId) => {
        axios.delete(`http://localhost:3000/favorites`, { data: { userId, carId } })
            .then((response) => {
                console.log("delete response: ", response.data);
                setCars(cars.filter(car => car.id !== carId))
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <>
            <NavBar />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mt: 2, ml: 16, mr: 16 }}>
                <Typography variant="h4" component="div">Wishlist</Typography>
                <Typography variant="body1" component="div">You have {cars.length} saved items.</Typography>
                <Box sx={{ display: 'flex', gap: 4, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', mt: 2 }}>
                    {cars.map(car => (
                        <Stack key={car.id}>
                            <CarCard car={car} />
                            <Button variant='outlined' startIcon={<DeleteIcon />} onClick={() => handleDelete(car.id)}>Delete</Button>
                        </Stack>
                    ))}
                </Box>
            </Box>
        </>
    );
};

export default Wishlist;