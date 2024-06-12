import Navbar from './components/NavBar';
import Carousel from './components/Carousel';
import SalesBanner from './components/SalesBanner';
import './Landing.css';
import { ImageList, ImageListItem , Button, Box, Link, Typography } from '@mui/material';
import Footer from './components/Footer';

import img1 from './assets/pexels-robert-hess-216886-4824774.jpg';
import img2 from './assets/pexels-tnarg-8717323.jpg';
import img3 from './assets/pexels-wearelivingart-7862143.jpg';
import summerSale from './assets/summer_sale2.png';
import electrics from './assets/electric-vehicles.png';
import sedan from './assets/sedan.png';
import suv from './assets/suv.png';
import pickupTruck from './assets/pickup_truck.png';
import van from './assets/van.png';
import convertible from './assets/convertible.png';
import miata from './assets/2018_mazda_mx_5_miata_sideview-removebg-preview.png';

function LandingPage() {
    const images = [img1, img2, img3];

    const vehicleTypes = [
        {
            img: sedan,
            title: 'Sedan'
        },
        {
            img: suv,
            title: 'SUV'
        },
        {
            img: pickupTruck,
            title: 'Pickup Truck'
        },
        {
            img: van,
            title: 'Van'
        },
        {
            img: convertible,
            title: 'Convertible'    
        },
        {
            img: miata,
            title: 'Miata'
        }
    ];
    
    const salesBannerMessage = "Summer Sale begins June 12th! Buy one car, get one free for a limited time only! Get em while the gettin's good!";

    return (
        <div>
            <Navbar />
            <SalesBanner message={salesBannerMessage} />
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 8}}>
                <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                    <Box sx={{ mt: 10, ml: 6, mb: 6 }}>
                        <Typography variant="h4">Showcasing the coolest cars</Typography>
                    </Box>
                    <Carousel images={images} />
                </Box>
                <Box sx={{ ml: 8, mt: 12, maxHeight: '450px'}}>
                    <img src={summerSale} alt='sale' style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain'
                    }}/>
                </Box>
            </Box>
            <Box sx={{ display: 'flex'}}>
                <Box sx={{ width: '40%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={electrics} alt='Electric Vehicles' style={{ width: '80%', height: '80%', objectFit: 'cover' }} />
                </Box>
                <Box sx={{ width: '60%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mr: 8 }}>
                    <Button variant="contained" sx={{ width: '50%' }}>Click here to view all inventory</Button>
                    <ImageList sx={{ width: '100%', maxHeight: 450 }} cols={3} rowHeight={200}>
                        {vehicleTypes.map((item) => (
                            <ImageListItem key={item.img} className="vehicle-item" onClick={() => console.log('Clicked')}>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%'}}>
                                    <img
                                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                        alt={item.title}
                                        loading="lazy"
                                        style={{
                                            objectFit: 'contain',
                                            width: '100%',
                                        }}
                                    />
                                </Box>
                                <div className="vehicle-info">
                                    <Typography variant="h6">{item.title}</Typography>
                                </div>
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
            </Box>
            <Footer />
        </div>
    );
}

export default LandingPage;