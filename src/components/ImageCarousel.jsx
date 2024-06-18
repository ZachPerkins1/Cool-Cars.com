
import Slider from 'react-slick';
import { Container, Box, Grid, Typography } from '@mui/material';
import carSquad from '../assets/car_squad.png';
import carOptions from '../assets/cars_options.png';
import carSale from '../assets/car_sale.png';
import carCheck from '../assets/car_check.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../AboutUs/AboutUs.css'


const ImageCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        adaptiveHeight: true,
    };

    const carouselItems = [
        {
            image: carCheck,
            header: 'Tested for Quality',
            text: 'Every vehicle in our inventory undergoes a rigorous quality check to ensure it meets our high standards. Drive with confidence knowing your car is reliable and safe.'
        },
        {
            image: carSale,
            header: 'Exceptional Service',
            text: 'Our team is dedicated to providing outstanding service from the moment you walk in. Experience a seamless car buying process with our knowledgeable staff.'
        },
        {
            image: carOptions,
            header: 'Wide Selection',
            text: 'Explore our extensive range of vehicles to find the perfect match for your needs. Whether you are looking for a luxury sedan or a family SUV, we have something for everyone.'
        },
        {
            image: carSquad,
            header: 'Building a Community',
            text: 'We believe in building a strong community of car enthusiasts. Join us for events, meetups, and more as we share our passion for automobiles.'
        },
    ];

    return (
        <Container className="carouselContainer">
            <Slider {...settings}>
                {carouselItems.map((item, index) => (
                    <Box key={index} className="carouselItemBox">
                        <Grid container alignItems="center" spacing={2}>
                            <Grid item xs={12} md={6}>
                                <img src={item.image} alt={`Carousel ${index + 1}`} className="carouselImage" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box className="carouselTextContainer">
                                    <Typography variant="h4" gutterBottom>
                                        {item.header}
                                    </Typography>
                                    <Typography variant="body1">
                                        {item.text}
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                ))}
            </Slider>
        </Container>
    );
};

export default ImageCarousel;