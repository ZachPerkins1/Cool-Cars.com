import React, { useState, useEffect } from 'react';
import { Grid, TextField, Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/NavBar';
import CarCard from './components/CarCard.jsx';

const getCars = async (vehicleType) => {
    const { data } = await axios.get('http://localhost:3000/cars');
    return data;
}

function InventoryPage() {
    const [cars, setCars] = useState([]);
    const [filteredCars, setFilteredCars] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const vehicleType = params.get('type');

    useEffect(() => {
        getCars().then((data) => {
            setCars(data);
            setFilteredCars(data);
            setIsLoading(false);
        });
    }, []);

    useEffect(() => {
        if (!isLoading) {
            if (vehicleType) {
                console.log('cars---', cars)
                setFilteredCars(cars.filter((car) => {
                    console.log('vehicleType: ', vehicleType, 'car.type: ', car.body_style);
                    return car.body_style === vehicleType
            }));
                console.log('filteredCars: ', filteredCars);
            } else {
                setFilteredCars(cars);
            }
        }
    }, [vehicleType, cars]);

    const carCards = filteredCars.map((car) =>
        <Grid item key={car.id}>
            <CarCard car={car}></CarCard>
        </Grid>
    );


    return (
        <>
            <Navbar></Navbar>
            <Grid container>
                <Grid item lg={3} sx={{ ml: 12, mt: 4 }}>
                    <h2>
                        Filters:
                    </h2>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="Automatic Transmission" />
                        <FormControlLabel control={<Checkbox />} label="Manual Transmission" />
                        <FormControlLabel control={<Checkbox />} label="SUV" />
                        <FormControlLabel control={<Checkbox />} label="Two Doors" />
                        <FormControlLabel control={<Checkbox />} label="Four Doors" />
                        <FormControlLabel control={<Checkbox />} label="Convertible" />
                    </FormGroup>
                </Grid>
                <Grid item lg={8} sx={{ mt: 4, ml: -8 }}>
                    <h2>Search for a car:</h2>
                    <TextField id="outlined-basic" label="Search for a Car" variant="outlined" sx={{ width: '90%' }} />
                    <Grid container sx={{ mt: 3 }} spacing={4}>
                        {carCards}
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default InventoryPage