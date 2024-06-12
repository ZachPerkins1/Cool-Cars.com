import React from 'react';
import {Box, Card, CardMedia, Typography, CardContent, IconButton} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Dot from './Dot';
import { FavoritesContext } from '../contexts/FavoritesContext';

const getColors = async () => {
    const { data } = await axios.get('http://localhost:3000/colors');
    return data;
}

function CarCard({car, showFavoriteIcon = true}) {
    const [colorMap, setColorMap] = useState({})
    const { favorites, setFavorites } = useContext(FavoritesContext);
    const [isFavorite, setIsFavorite] = useState(false);
    const userId = 1; // TODO: Update this to use the logged in user's ID
    const carId = car.id;

    
    useEffect(() => {
        const result = getColors().then((data) => {
            let colorObj = {}
            data.forEach((color) => {
                colorObj[color.id] = color.name
            })
            setColorMap(colorObj)
        })
        .catch((error) => {
            console.error('Error:', error);
        });

        if (favorites.some(favorite => favorite.car_id === carId)) {
            setIsFavorite(true);
        };
    }, [])
    
    const handleFavoriteClick = async () => {
        try {
            if (isFavorite) {
                await axios.delete('http://localhost:3000/favorites', { data: { userId, carId } });
                setFavorites(favorites.filter(favorite => favorite.car_id !== carId));
                setIsFavorite(false);
            } else {
                const alreadyFavorite = favorites.some(favorite => favorite.car_id === carId);
                if (!alreadyFavorite) {
                    await axios.post('http://localhost:3000/favorites', { userId, carId });
                    setFavorites([...favorites, car]);
                    setIsFavorite(true);
                }
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="194"
                image="https://hips.hearstapps.com/hmg-prod/images/mac01634-1661870031.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=1200:*"
                alt="Paella dish"
            />
            <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Typography style={{display:'inline'}}>{car.name}</Typography>
                    <Dot color={colorMap[car.color_id]} />
                    <IconButton aria-label="add to favorites" onClick={() => handleFavoriteClick()} style={{ display: showFavoriteIcon ? 'block' : 'none'}}>
                        {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </IconButton>
                </Box>
                <Typography>${car.price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Typography>
                <Typography>Miles: {car.mileage.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Typography>
                <Typography variant="body2" color="text.secondary">
                    Experience the thrill of driving with this stunning 2019 Mazda
                    Miata in vibrant Sunshine Yellow. This iconic roadster combines
                    classic sports car charm with modern technology, offering an exhilarating
                    open-air driving experience.
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CarCard;