import Navbar from './components/NavBar';
import Carousel from './components/Carousel';
import SalesBanner from './components/SalesBanner';
import './Landing.css';
import { ImageList, ImageListItem , Button, Box, Link, Typography } from '@mui/material';

function LandingPage() {
    const images = [
        'images/pexels-robert-hess-216886-4824774.jpg',
        'images/pexels-tnarg-8717323.jpg',
        'images/pexels-wearelivingart-7862143.jpg'
    ];

    const vehicleTypes = [
        {
            img: 'images/sedan.png',
            title: 'Sedan'
        },
        {
            img: 'images/suv.png',
            title: 'SUV'
        },
        {
            img: 'images/pickup_truck.png',
            title: 'Pickup Truck'
        },
        {
            img: 'images/van.png',
            title: 'Van'
        },
        {
            img: 'images/convertible_yellow.png',
            title: 'Convertible'    
        }
    ];
    
    const salesBannerMessage = "Summer Sale begins June 12th! Buy one car, get one free for a limited time only! Get em while the gettin's good!";

    return (
        <div>
            <Navbar />
            <SalesBanner message={salesBannerMessage} />
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 8, mt: 4 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Box sx={{ mt: 6 }}>
                        <Typography variant="h5">Showcasing the coolest cars</Typography>
                    </Box>
                    <Carousel images={images} />
                </Box>
                <Box sx={{ ml: 4 }}>
                    <img src='images/bogo_sale.png' alt='bogo sale' />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Box sx={{ width: '40%', display: 'flex', alignContent: 'center', justifyContent: 'center', ml: 16 }}>
                    <img src='images/pexels-shkrabaanthony-7144174.jpg' alt='Car dealership' style={{ width: '80%', height: '80%', objectFit: 'cover' }} />
                </Box>
                <Box sx={{ width: '60%', display: 'flex', flexDirection: 'column', alignItems: 'center', mr: 16}}>
                    <Button variant="contained" sx={{ width: '50%' }}>Click here to view all inventory</Button>
                    <ImageList sx={{ width: '100%', height: 450 }} cols={3} rowHeight={200}>
                        {vehicleTypes.map((item) => (
                            <ImageListItem key={item.img} className="vehicle-item" onClick={() => console.log('Clicked')}>
                                {/* TODO: make images clickable and link to search for that vehicle type */}
                                <img
                                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                    alt={item.title}
                                    loading="lazy"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                />
                                <div className="vehicle-info">
                                    <Typography variant="h6">{item.title}</Typography>
                                </div>
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
            </Box>
        </div>
    );
}

export default LandingPage;