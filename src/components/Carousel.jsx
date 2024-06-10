import React from 'react';
import Slider from 'react-slick';
import './Carousel.css';
import { Box, Container } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({images}) => {
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };

  return (
    <Container className="carouselContainer" maxWidth='md'>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index} className="carouselImageBox" >
            <img src={image} alt={`Carousel ${index + 1}`} className="carouselImage" />
          </Box>
        ))}
      </Slider>
    </Container>
  );
};

export default Carousel;
