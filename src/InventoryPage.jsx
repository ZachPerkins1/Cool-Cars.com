import React, { useState, useEffect } from 'react';
import { Grid, TextField, Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/NavBar';
import CarCard from './components/CarCard.jsx';
import Footer from './components/Footer.jsx';

const getCars = async (vehicleType) => {
    const { data } = await axios.get('http://localhost:3000/cars');
    return data;
}

function InventoryPage() {
    const [cars, setCars] = useState([]);
    const [filters, setFilters] = useState([]);
    const [filteredCars, setFilteredCars] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [userId, setUserId] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const vehicleType = params.get('type');

    useEffect(() => {
        const sessionUser = JSON.parse(sessionStorage.getItem('userData'));
        if (sessionUser) {
            setUserId(sessionUser.id);
        }

        getCars().then((data) => {
            setCars(data);
            setFilteredCars(data.reverse());
            setIsLoading(false);
        });

        if (vehicleType) {
            setFilters([vehicleType]);
        }

    }, []);

    useEffect(() => {
        if (!isLoading) {
            let filtered = cars;
            if (vehicleType) {
                filtered = filtered.filter((car) => car.body_style === vehicleType);
            } 
            if (filters.length > 0) {
                filtered = filtered.filter((car) => filters.includes(car.body_style));
            } else {
                filtered = cars;
            }
            setFilteredCars(filtered);
        }
    }, [isLoading, vehicleType, filters, cars]);

    const handleFilterChange = (event) => {
        const { name, checked } = event.target;
        setFilters(prevFilters => {
            const newFilters = checked ? [...prevFilters, name] : prevFilters.filter(filter => filter !== name);
            navigate({
                pathname: '/inventory',
                search: newFilters.length > 0 ? `?type=${newFilters.join(',')}` : '',
            });
            return newFilters;
        });
    };

    const carCards = filteredCars.map((car) =>
        <Grid item key={car.id}>
            <CarCard car={car} userId={userId} image={car.id}></CarCard>
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
                        <FormControlLabel control={<Checkbox checked={filters.includes('Sedan')} name='Sedan' onChange={handleFilterChange}/>} label="Sedan" />
                        <FormControlLabel control={<Checkbox checked={filters.includes('SUV')} name='SUV' onChange={handleFilterChange}/>} label="SUV" />
                        <FormControlLabel control={<Checkbox checked={filters.includes('Convertible')} name='Convertible' onChange={handleFilterChange}/>} label="Convertible" />
                        <FormControlLabel control={<Checkbox checked={filters.includes('Pickup Truck')} name='Pickup Truck' onChange={handleFilterChange}/>} label="Truck" />
                        <FormControlLabel control={<Checkbox checked={filters.includes('Minivan')} name='Minivan' onChange={handleFilterChange}/>} label="Van" />
                        <FormControlLabel control={<Checkbox checked={filters.includes('Coupe')} name='Coupe' onChange={handleFilterChange}/>} label="Coupe" />
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
            <Footer />
        </>
    )
}

export default InventoryPage