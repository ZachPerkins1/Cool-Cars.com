import React, { useState, useEffect } from 'react';
import { Grid, TextField, Checkbox, FormGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/NavBar';
import CarCard from './components/CarCard.jsx';
import Footer from './components/Footer.jsx';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme.jsx'

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

    function searchCars(event) {
        let searchString = event.target.value.toUpperCase()
        setFilteredCars(cars.filter((car) => car.model.toUpperCase().includes(searchString) || car.make.toUpperCase().includes(searchString)))
        if (searchString === '') {
            setFilteredCars(cars)
        }
    }

    function sortCarsByMiles(event) {
        let sortedCars = []
        if (event.target.value === 'ascending') {
            sortedCars = filteredCars.sort((currentCar, nextCar) => {
                return currentCar.mileage - nextCar.mileage
            })
        }
        else {
            sortedCars = (filteredCars.sort((currentCar, nextCar) => nextCar.mileage - currentCar.mileage))
        }
        setFilteredCars([...sortedCars])
    }

    function sortCarsByPrice(event) {
        let sortedCars = []
        if (event.target.value === 'ascending') {
            sortedCars = filteredCars.sort((currentCar, nextCar) => {
                return currentCar.price - nextCar.price
            })
        }
        else {
            sortedCars = (filteredCars.sort((currentCar, nextCar) => nextCar.price - currentCar.price))
        }
        setFilteredCars([...sortedCars])
    }

    const getCars = async (vehicleType) => {
        const { data } = await axios.get('http://localhost:3000/cars');
        return data;
    }

    useEffect(() => {
        const sessionUser = JSON.parse(sessionStorage.getItem('userData'));
        if (sessionUser) {
            setUserId(sessionUser.id);
        }

        getCars().then((data) => {
            setCars(data.reverse());
            setFilteredCars(data);
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
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <ThemeProvider theme={theme}>
                <Navbar></Navbar>
                <Grid container style={{ fontFamily: 'Figtree', flexGrow:1}}>
                    <Grid item lg={3} sx={{ ml: 12, mt: 4 }}>
                        <h2>
                            Filters:
                        </h2>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox checked={filters.includes('Sedan')} name='Sedan' onChange={handleFilterChange} />} label="Sedan" />
                            <FormControlLabel control={<Checkbox checked={filters.includes('SUV')} name='SUV' onChange={handleFilterChange} />} label="SUV" />
                            <FormControlLabel control={<Checkbox checked={filters.includes('Convertible')} name='Convertible' onChange={handleFilterChange} />} label="Convertible" />
                            <FormControlLabel control={<Checkbox checked={filters.includes('Pickup Truck')} name='Pickup Truck' onChange={handleFilterChange} />} label="Truck" />
                            <FormControlLabel control={<Checkbox checked={filters.includes('Minivan')} name='Minivan' onChange={handleFilterChange} />} label="Van" />
                            <FormControlLabel control={<Checkbox checked={filters.includes('Coupe')} name='Coupe' onChange={handleFilterChange} />} label="Coupe" />
                        </FormGroup>
                        <FormControl sx={{ mt: 4 }}>
                            <h2>Mileage</h2>
                            <FormLabel id="sort-by-mileage-radio-buttons-group-label">Order by Miles</FormLabel>
                            <RadioGroup
                                aria-labelledby="sort-by-mileage-radio-buttons-group-label"
                                name="sort-miles-radio-buttons-group"
                                onChange={sortCarsByMiles}
                            >
                                <FormControlLabel value="ascending" control={<Radio />} label="Ascending" />
                                <FormControlLabel value="descending" control={<Radio />} label="Descending" />
                            </RadioGroup>
                        </FormControl>
                        <FormControl sx={{ mt: 4 }}>
                            <h2>Price</h2>
                            <FormLabel id="sort-by-price-radio-group-label">Order by Price</FormLabel>
                            <RadioGroup
                                aria-labelledby="sort-by-price-radio-group"
                                name="sort-price-radio-buttons-group"
                                onChange={sortCarsByPrice}
                            >
                                <FormControlLabel value="ascending" control={<Radio />} label="Ascending" />
                                <FormControlLabel value="descending" control={<Radio />} label="Descending" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item lg={8} sx={{ mt: 4, ml: -8 }}>
                        <h1>Search for a car:</h1>
                        <TextField
                            onChange={searchCars}
                            id="outlined-basic" label="Search for a Car" variant="outlined" sx={{ width: '90%', mt: 1 }} />
                        <Grid container sx={{ mt: 3 }} spacing={4}>
                            {carCards}
                        </Grid>
                    </Grid>
                </Grid>
                <Footer />
            </ThemeProvider>
        </div>
    )
}

export default InventoryPage