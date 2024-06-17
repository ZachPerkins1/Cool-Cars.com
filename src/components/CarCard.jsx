import React from 'react';
import { Box, Card, CardMedia, Typography, CardContent, IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Dot from './Dot';
import { FavoritesContext } from '../contexts/FavoritesContext';

import carolla from '../assets/toyota-carolla-2004.png';
import civic from '../assets/1995-Honda-Civic.png';
import previa from '../assets/1996-toyota-previa.png';
import altima from '../assets/2017_nissan_altima.png';
import odysee from '../assets/2018_honda_odyssey.png';
import outback from '../assets/2018-Subaru-Outback.png';
import malibu from '../assets/2019-chevrolet-malibu.png';
import mustang from '../assets/2020-Ford-Mustang.png';
import tacoma from '../assets/2020-toyota-tacoma.png';
import bmw from '../assets/2021-bmw-330e-sedan.png';
import cclass from '../assets/2021-mercedes-benz-c-class.png';
import golf from '../assets/2022-VW-Golf-GTI-2.png';
import a4 from '../assets/audi-a4.png';
import portofino from '../assets/ferrari-portofino.png';
import elantra from '../assets/hyundai-elantra.png';
import mazda3 from '../assets/Mazda3.png';
import carrera from '../assets/porsche-911-carrera.png';
import cybertruck from '../assets/tesla-cybertruck-giga-texas-car-designboom-03.png';
import sorento from '../assets/sorento_2019.png';

const getColors = async () => {
    const { data } = await axios.get('http://localhost:3000/colors');
    return data;
}

function CarCard({ car, userId, showFavoriteIcon = true }, image ) {
    const [colorMap, setColorMap] = useState({})
    const { favorites, setFavorites } = useContext(FavoritesContext);
    const [isFavorite, setIsFavorite] = useState(false);
    const carId = car.id;

    const carImages = {
        1: carolla,
        2: civic,
        3: mustang,
        4: malibu,
        5: altima,
        6: bmw,
        7: a4,
        8: cclass,
        9: golf,
        10: elantra,
        11: sorento,
        12: outback,
        13: mazda3,
        14: previa,
        15: tacoma,
        16: odysee,
        17: cybertruck,
        18: carrera,
        19: portofino
    }

    useEffect(() => {
        console.log('CAAARRRRR: ', car);
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
                image={carImages[car.id]}
                alt="Paella dish"
            />
            <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Typography style={{display:'inline'}}>{car.year + ' ' + car.make + ' ' + car.model + ' '}</Typography>
                    {/* <Dot color={colorMap[car.color_id]} /> */}
                    <IconButton aria-label="add to favorites" onClick={() => handleFavoriteClick()} style={{ display: showFavoriteIcon ? 'block' : 'none' }}>
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
