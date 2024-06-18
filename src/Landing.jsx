import React from 'react';
import { Container, ImageList, ImageListItem , Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from './components/NavBar';
import SalesBanner from './components/SalesBanner';
import Footer from './components/Footer';
import './Landing.css';

import banner2 from './assets/car_banner2.png';
import sedan from './assets/sedan.png';
import suv from './assets/suv.png';
import pickupTruck from './assets/pickup_truck.png';
import van from './assets/van.png';
import convertible from './assets/convertible.png';
import miata from './assets/2018_mazda_mx_5_miata_sideview-removebg-preview.png';


function LandingPage() {
    const vehicleTypes = [
        {
            img: sedan,
            title: 'Sedan',
            type: 'Sedan'
        },
        {
            img: suv,
            title: 'SUV',
            type: 'SUV'
        },
        {
            img: pickupTruck,
            title: 'Pickup Truck',
            type: 'Pickup Truck'
        },
        {
            img: van,
            title: 'Van',
            type: 'Minivan'
        },
        {
            img: convertible,
            title: 'Convertible',
            type: 'Convertible'    
        },
        {
            img: miata,
            title: 'Coupe',
            type: 'Coupe'
        }
    ];
    
    const salesBannerMessage = "Summer Sale begins June 12th! Buy one car, get one free for a limited time only! Get em while the gettin's good!".toUpperCase();

    const navigate = useNavigate();

    const handleViewInventory = () => {
        navigate('/inventory');
    }

    const handleVehicleTypeClick = (vehicleType) => {
        navigate(`/inventory?type=${vehicleType}`);
    }

    return (
        <div id="landing-root">
            <Navbar />
            <SalesBanner message={salesBannerMessage} />
            <Box 
                sx={{
                    position: 'relative',
                    height: '700px',
                    width: '100%',
                    backgroundImage: `url(${banner2})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center 70%',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-start',
                    mb: 8,
                    '::after': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        backgroundColor: 'rgba(173, 216, 230, 0.4)', // This puts a filter over the background image
                    },
                }}
            >
            </Box>
            <Box 
                sx={{
                    position: 'absolute',
                    width: '50%',
                    pt: 8,
                    top: '40%',
                    left: '30%',
                    transform: 'translate(-50%, -50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                }}
            >
                <Typography variant="h3"
                    sx={{
                        fontFamily: 'Figtree, Roboto, sans-serif',
                        color: '#fff',
                        fontWeight: 'bold',
                        fontStyle: 'italic',
                        fontSize: '5rem',
                        textAlign: 'left',
                    }}
                >
                    Car buying made easy
                </Typography>
                <Box sx={{ mt: 4 }}>
                    <Button aria-label='View Inventory' variant="contained" onClick={() => handleViewInventory()} sx={{ fontFamily: 'Figtree, Roboto, sans-serif', bgcolor: '#bbdefb', color: '#333', ml: 2 }}>Click here to view all inventory</Button>
                </Box>
            </Box>
            <Container maxWidth='xl'>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 8 }}>
                    <Box sx={{ width: '60%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mr: 8 }}>
                        <Typography variant="h4" sx={{ fontFamily: 'Figtree, Roboto, sans-serif', mt: 4 }}>View by vehicle type</Typography>
                        <ImageList sx={{ width: '100%', maxHeight: 450 }} cols={3} rowHeight={200}>
                            {vehicleTypes.map((vehicle, index) => (
                                <ImageListItem key={index} className="vehicle-item" onClick={() => handleVehicleTypeClick(vehicle.type)}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%'}}>
                                        <img
                                            srcSet={`${vehicle.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                            src={`${vehicle.img}?w=164&h=164&fit=crop&auto=format`}
                                            alt={vehicle.title}
                                            loading="lazy"
                                            style={{
                                                objectFit: 'contain',
                                                width: '100%',
                                            }}
                                        />
                                    </Box>
                                    <div className="vehicle-info">
                                        <Typography variant="h6" sx={{ fontFamily: 'Figtree, Roboto, sans-serif' }}>{vehicle.title}</Typography>
                                    </div>
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Box>
                </Box>
            </Container>
            <Footer />
        </div>
    );
}

export default LandingPage;