import React from 'react';
import Slider from 'react-slick';
import { Box, Container } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({images}) => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  // const images = [
  //   'src/assets/pexels-robert-hess-216886-4824774.jpg',
  //   'src/assets/pexels-tnarg-8717323.jpg',
  //   'src/assets/pexels-wearelivingart-7862143.jpg'
  // ]

  return (
    <Container className="carouselContainer" maxWidth='sm'>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index} className="carouselImageBox">
            <img src={image} alt={`Carousel ${index + 1}`} className="carouselImage" height={300} width={'100%'}/>
          </Box>
        ))}
      </Slider>
    </Container>
  );
};

export default Carousel;


// import React from 'react';
// import './Carousel.css';
// import Slider from 'react-slick';
// import { Container, Box, Grid, Typography } from '@mui/material';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';


// const Carousel = ({carouselItems}) => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 3000,
//     };

//     // const carouselItems = [
//     //     {
//     //         image: '/images/car_check.jpeg',
//     //         header: 'Tested for Quality',
//     //         text: 'Every vehicle in our inventory undergoes a rigorous quality check to ensure it meets our high standards. Drive with confidence knowing your car is reliable and safe.'
//     //     },
//     //     {
//     //         image: '/images/car_sale.webp',
//     //         header: 'Exceptional Service',
//     //         text: 'Our team is dedicated to providing outstanding service from the moment you walk in. Experience a seamless car buying process with our knowledgeable staff.'
//     //     },
//     //     {
//     //         image: '/images/cars_options.jpeg',
//     //         header: 'Wide Selection',
//     //         text: 'Explore our extensive range of vehicles to find the perfect match for your needs. Whether you are looking for a luxury sedan or a family SUV, we have something for everyone.'
//     //     },
//     //     {
//     //         image: '/images/car_squad.webp',
//     //         header: 'Building a Community',
//     //         text: 'We believe in building a strong community of car enthusiasts. Join us for events, meetups, and more as we share our passion for automobiles.'
//     //     },
//     // ];

//     return (
//         <Container className="carouselContainer" maxWidth='sm'>
//             <Slider {...settings}>
//                 {carouselItems.map((item, index) => (
//                     <Box key={index} className="carouselItemBox">
//                         <Grid container alignItems="center" spacing={2}>
//                             <Grid item xs={12} md={6}>
//                                 <img src={item.image} alt={`Carousel ${index + 1}`} className="carouselImage" />
//                             </Grid>
//                             <Grid item xs={12} md={6}>
//                                 <Typography variant="h4" gutterBottom>
//                                     {item.header}
//                                 </Typography>
//                                 <Typography variant="body1">
//                                     {item.text}
//                                 </Typography>
//                             </Grid>
//                         </Grid>
//                     </Box>
//                 ))}
//             </Slider>
//         </Container>
//     );
// };

// export default Carousel;