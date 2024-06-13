// import { Container, Typography, Card, CardContent, Avatar, Grid, Box, Rating, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import NavBar from '../components/NavBar.jsx';
// import ImageCarousel from '../components/ImageCarousel.jsx';
// import './AboutUs.css';
// import axios from 'axios';
// import { Helmet } from 'react-helmet';

// // image exports
// import shaan from './assets/shaan.png';
// import juan from './assets/juan.png';
// import noah from './assets/noah.png';
// import yellowMiata from './assets/yellow_miata.png'


// // import brad from './assets/brad.jpeg';
// // import leo from './assets/leo.webp';
// // import scarlet from './assets/scarlet.jpeg';
// // import matthew from './assets/matthew.jpeg';
// // import margot from './assets/margot.jpeg';



// const AboutUs = () => {
//     const [expandedCard, setExpandedCard] = useState(null);
//     const [reviews, setReviews] = useState([]);
//     const [filter, setFilter] = useState('newest');


//     const handleCardClick = (personName) => {
//         if (expandedCard === personName) {
//             setExpandedCard(null); // Collapse the card if already expanded
//         } else {
//             setExpandedCard(personName); // Expand the clicked card
//         }
//     };

//     const isCardExpanded = (personName) => expandedCard === personName;

//     const handleFilterChange = (event) => {
//         setFilter(event.target.value);
//     };

//     const getFilteredReviews = () => {
//         switch (filter) {
//             case 'mostPositive':
//                 return [...reviews].sort((a, b) => b.rating - a.rating);
//             case 'mostCritical':
//                 return [...reviews].sort((a, b) => a.rating - b.rating);
//             case 'newest':
//                 return [...reviews].sort((a, b) => new Date(b.date) - new Date(a.date)); // Assuming 'date' is a field in your reviews
//             default:
//                 return reviews;
//         }
//     };

//     const filteredReviews = getFilteredReviews();

//     useEffect(() => {
//         const fetchReviews = async () => {
//             try {
//                 const response = await axios.get('http://localhost:3000/reviews');
//                 console.log('Response:', response);
//                 if (Array.isArray(response.data)) {
//                     setReviews(response.data);
//                 } else {
//                     console.error('Invalid data format received:', response.data);
//                 }
//             } catch (error) {
//                 console.error('Error fetching reviews:', error);
//             }
//         };

//         fetchReviews();
//     }, []);

//     return (
//         <>
//             <Helmet>
//                 <meta name="viewport" content="width=device-width, initial-scale=1" />
//             </Helmet>
//             <NavBar />
//             <Container maxWidth="lg" style={{ marginTop: '2rem' }}>
//                 <Grid container spacing={4} alignItems="center">
//                     <Grid item xs={12} md={6}>
//                         <img src={yellowMiata} alt="About Us" style={{ width: '100%' }} />
//                     </Grid>
//                     <Grid item xs={12} md={6}>
//                         <Typography variant="h3" align="center" gutterBottom>
//                             About Us
//                         </Typography>
//                         <Typography variant="body1" align="center" paragraph>
//                             We are a team of passionate automotive enthusiasts committed to delivering the best car buying experience. Our car dealership is built on a foundation of trust, quality, and customer satisfaction. We aim to provide a diverse selection of vehicles and exceptional service to meet all your automotive needs.
//                         </Typography>
//                     </Grid>
//                 </Grid>

//                 <Box marginTop={10} marginBottom={10}>
//                     <Typography variant="h4" align="center" gutterBottom>
//                         Meet the Team
//                     </Typography>
//                     <Grid container spacing={4} justifyContent="center" marginTop={3}>
//                         <Grid item xs={12} sm={6} md={4}>
//                             <Card className={isCardExpanded('Shaan Malhotra') ? 'expandedCard' : 'card'} onClick={() => handleCardClick('Shaan Malhotra')}>
//                                 <CardContent>
//                                     <Avatar style={{ margin: '0 auto', width: 100, height: 100 }} alt="Shaan Malhotra" src={shaan} />
//                                     <Typography variant="h5" align="center" gutterBottom>
//                                         Shaan Malhotra
//                                     </Typography>
//                                     <Typography variant="body2" color="textSecondary" align="center">
//                                         Co-Founder
//                                     </Typography>
//                                     {isCardExpanded('Shaan Malhotra') && (
//                                         <>
//                                             <Typography variant="body2" color="textSecondary" align="center">
//                                                 Email: shaan@example.com
//                                             </Typography>
//                                             <Typography variant="body2" color="textSecondary" align="center">
//                                                 Phone: +1234567890
//                                             </Typography>
//                                         </>
//                                     )}
//                                 </CardContent>
//                             </Card>
//                         </Grid>
//                         <Grid item xs={12} sm={6} md={4}>
//                             <Card className={isCardExpanded('Juan Pinol') ? 'expandedCard' : 'card'} onClick={() => handleCardClick('Juan Pinol')}>
//                                 <CardContent>
//                                     <Avatar style={{ margin: '0 auto', width: 100, height: 100 }} alt="Juan Pinol" src={juan} />
//                                     <Typography variant="h5" align="center" gutterBottom>
//                                         Juan Pinol
//                                     </Typography>
//                                     <Typography variant="body2" color="textSecondary" align="center">
//                                         Co-Founder
//                                     </Typography>
//                                     {isCardExpanded('Juan Pinol') && (
//                                         <>
//                                             <Typography variant="body2" color="textSecondary" align="center">
//                                                 Email: juan@example.com
//                                             </Typography>
//                                             <Typography variant="body2" color="textSecondary" align="center">
//                                                 Phone: +1234567890
//                                             </Typography>
//                                         </>
//                                     )}
//                                 </CardContent>
//                             </Card>
//                         </Grid>
//                         <Grid item xs={12} sm={6} md={4}>
//                             <Card className={isCardExpanded('Noah Beito') ? 'expandedCard' : 'card'} onClick={() => handleCardClick('Noah Beito')}>
//                                 <CardContent>
//                                     <Avatar style={{ margin: '0 auto', width: 100, height: 100 }} alt="Noah Beito" src={noah} />
//                                     <Typography variant="h5" align="center" gutterBottom>
//                                         Noah Beito
//                                     </Typography>
//                                     <Typography variant="body2" color="textSecondary" align="center">
//                                         Co-Founder
//                                     </Typography>
//                                     {isCardExpanded('Noah Beito') && (
//                                         <>
//                                             <Typography variant="body2" color="textSecondary" align="center">
//                                                 Email: noah@example.com
//                                             </Typography>
//                                             <Typography variant="body2" color="textSecondary" align="center">
//                                                 Phone: +1234567890
//                                             </Typography>
//                                         </>
//                                     )}
//                                 </CardContent>
//                             </Card>
//                         </Grid>
//                     </Grid>
//                 </Box>
//                 <Box marginBottom={10}>
//                     <Typography variant="h4" align="center" gutterBottom>
//                         Explore Our Dealership
//                     </Typography>
//                     <ImageCarousel />
//                 </Box>
//                 <Box>
//                     <Typography variant="h4" align="center" gutterBottom>
//                         Customer Reviews
//                     </Typography>
//                     <FormControl fullWidth variant="outlined" style={{ marginBottom: '16px' }}>
//                         <InputLabel>Filter Reviews</InputLabel>
//                         <Select value={filter} onChange={handleFilterChange} label="Filter Reviews">
//                             <MenuItem value="newest">Newest</MenuItem>
//                             <MenuItem value="mostPositive">Most Positive</MenuItem>
//                             <MenuItem value="mostCritical">Most Critical</MenuItem>
//                         </Select>
//                     </FormControl>
//                     <Grid container spacing={4}>
//                         {filteredReviews.map((review) => (
//                             <Grid item xs={12} sm={6} md={4} key={review.id}>
//                                 <Card>
//                                     <CardContent>
//                                         <Avatar style={{ margin: '0 auto', width: 100, height: 100 }} src={`http://localhost:3000${review.avatar}`} alt={review.name} />
//                                         <Typography variant="h5" align="center" gutterBottom>
//                                             {review.name}
//                                         </Typography>
//                                         <Rating value={review.rating} readOnly style={{ justifyContent: 'center', display: 'flex' }} />
//                                         <Typography variant="body1" align="center">
//                                             {review.review}
//                                         </Typography>
//                                     </CardContent>
//                                 </Card>
//                             </Grid>
//                         ))}
//                     </Grid>
//                     <Box display="flex" justifyContent="center" marginTop={5}>
//                         <Button variant="contained" color="primary" component={Link} to="/leaveReview">
//                             Leave a Review
//                         </Button>
//                     </Box>
//                 </Box>
//             </Container>
//         </>
//     );
// };

// export default AboutUs;