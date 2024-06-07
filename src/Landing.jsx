import Navbar from './components/NavBar';
import Carousel from './components/Carousel';
import { ImageList, ImageListItem , Button, Box } from '@mui/material';

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

    return (
        <div>
            <Navbar />
            <Box  sx={{ display: 'flex', alignContent: 'center', justifyContent: 'center', mb: 4 }}>
                <Carousel images={images} />
                <Box>
                    <img src='images/bogo_sale.png' alt='bogo sale' />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Box sx={{ width: '40%', display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
                    <img src='images/pexels-shkrabaanthony-7144174.jpg' alt='Car dealership' style={{ width: '80%', height: '80%', objectFit: 'cover' }} />
                </Box>
                <Box sx={{ width: '60%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Button variant="contained" sx={{ width: '50%' }}>Click here to view all inventory</Button>
                    <ImageList sx={{ width: '100%', height: 450 }} cols={3} rowHeight={200}>
                        {vehicleTypes.map((item) => (
                            <ImageListItem key={item.img}>
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
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
            </Box>
        </div>
    );
}

export default LandingPage;