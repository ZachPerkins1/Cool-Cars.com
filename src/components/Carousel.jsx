import React from 'react';
import Slider from 'react-slick';
import { Box, Container } from '@mui/material';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

const Carousel = ({images}) => {
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Container className="carouselContainerLanding" maxWidth='sm'>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carouselImageContainerLanding">
            <Box className="carouselImageBoxLanding">
              <img src={image} alt={`Carousel ${index + 1}`} className="carouselImageLanding" />
            </Box>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default Carousel;
