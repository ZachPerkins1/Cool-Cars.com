import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import NavBar from './components/NavBar.jsx';
import CarCard from './components/CarCard.jsx';
import Footer from './components/Footer.jsx';
import axios from 'axios';
import { FavoritesContext } from './contexts/FavoritesContext.jsx';
import sadMiata2 from './assets/sad_miata2.png';
import sadMiata3 from './assets/sad_miata3.png';
import sadMiata4 from './assets/sad_miata4.png';

function Wishlist() {
    const [userId, setUserId] = useState(null);
    const { favorites, setFavorites } = useContext(FavoritesContext);
    const [currentSadMiata, setCurrentSadMiata] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const sadMiatas = [sadMiata2, sadMiata3, sadMiata4];

    useEffect(() => {
        const sessionUser = JSON.parse(sessionStorage.getItem('userData'));
        if (sessionUser) {
            setUserId(sessionUser.id);
        }

        setCurrentSadMiata(sadMiatas[Math.floor(Math.random() * sadMiatas.length)]);

    }, []);

    useEffect(() => {
        if (userId) {
            axios.get(`http://localhost:3000/favorites`, { params: { userId } })
                .then((response) => {
                    console.log('this favoirtes response data: ', response.data)
                    setFavorites(response.data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                })
                .finally(() => setIsLoading(false));
        } else {
            setIsLoading(false);
        }
    }, [userId]);

    const handleDelete = (carId) => {
        axios.delete(`http://localhost:3000/favorites`, { data: { userId, carId } })
            .then((response) => {
                console.log("delete response: ", response.data);
                console.log("FAVORITES: ", favorites);
                setFavorites(favorites.filter(favorite => favorite.car_id !== carId))
                // setFavorites(prevFavorites => prevFavorites.filter(favorite => favorite.car_id !== carId));

            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    if (isLoading) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', justifyContent: 'space-between' }}>
            <NavBar />
            <Container maxWidth='lg' sx={{ flexGrow: 1}}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4, mb: 4}}>
                    <Typography variant="h4" component="div">Wishlist</Typography>
                    <Typography variant="body1" component="div">Loading...</Typography>
                </Box>
            </Container>
            <Footer />
        </div>
        )
    } else {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', justifyContent: 'space-between' }}>
                <NavBar />
                <Container maxWidth='lg' sx={{ flexGrow: 1}}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4, mb: 4}}>
                        <Typography variant="h4" component="div">Wishlist</Typography>
                        <Typography variant="body1" component="div">You have {favorites.length} saved items.</Typography>
                        {
                            favorites.length === 0 ? (
                                <Box m={4}>
                                    <img src={currentSadMiata} />
                                </Box>
                            ) : (
                                <Box sx={{ display: 'flex', gap: 4, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', mt: 2 }}>
                                    {favorites.map(car => (
                                        <Stack key={car.id}>
                                            <CarCard car={car} userId={userId} showFavoriteIcon={false} image={car.car_id}/>
                                            <Button variant='outlined' startIcon={<DeleteIcon />} onClick={() => handleDelete(car.car_id)}>Delete</Button>
                                        </Stack>
                                    ))}
                                </Box>
                            )
                        }
                    </Box>
                </Container>
                <Footer />
            </div>
        );
    }

};

export default Wishlist;