import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import NavBar from './components/NavBar.jsx';
import CarCard from './components/CarCard.jsx';
import axios from 'axios';
import { FavoritesContext } from './contexts/FavoritesContext.jsx';

function Wishlist() {
    const [userId, setUserId] = useState(1); // TODO: Update this to use the logged in user's ID
    const { favorites, setFavorites } = useContext(FavoritesContext);

    useEffect(() => {
        axios.get(`http://localhost:3000/favorites`, { params: { userId } })
            .then((response) => {
                setFavorites(response.data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [userId]);

    const handleDelete = (carId) => {
        axios.delete(`http://localhost:3000/favorites`, { data: { userId, carId } })
            .then((response) => {
                console.log("delete response: ", response.data);
                setFavorites(favorites.filter(favorite => favorite.car_id !== carId))
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
                <Typography variant="body1" component="div">You have {favorites.length} saved items.</Typography>
                <Box sx={{ display: 'flex', gap: 4, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', mt: 2 }}>
                    {favorites.map(car => (
                        <Stack key={car.id}>
                            <CarCard car={car} showFavoriteIcon={false}/>
                            <Button variant='outlined' startIcon={<DeleteIcon />} onClick={() => handleDelete(car.car_id)}>Delete</Button>
                        </Stack>
                    ))}
                </Box>
            </Box>
        </>
    );
};

export default Wishlist;