import {Card, CardMedia, Typography, CardContent} from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Dot from './Dot';

const getColors = async () => {
    const { data } = await axios.get('http://localhost:3000/colors');
    return data;
}

function CarCard({car}) {
    const [colorMap, setColorMap] = useState({})

    useEffect(() => {
        const result = getColors().then((data) => {
            let colorObj = {}
            data.forEach((color) => {
                colorObj[color.id] = color.name
            })
            setColorMap(colorObj)
        }
        )
    }, [])

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="194"
                image="https://hips.hearstapps.com/hmg-prod/images/mac01634-1661870031.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=1200:*"
                alt="Paella dish"
            />
            <CardContent>
                <Typography style={{display:'inline', paddingRight:'50px'}}>{car.name}</Typography>
                <Dot color={colorMap[car.color_id]} />
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