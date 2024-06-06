import { Container, Typography, Card, CardContent, Avatar, Grid, Box, Rating } from '@mui/material';
import { useState } from 'react';
import NavBar from './components/NavBar.jsx';
import './AboutUs.css';



const AboutUs = () => {
    const [expandedCard, setExpandedCard] = useState(null);

    const handleCardClick = (personName) => {
        if (expandedCard === personName) {
            setExpandedCard(null); // Collapse the card if already expanded
        } else {
            setExpandedCard(personName); // Expand the clicked card
        }
    };

    const isCardExpanded = (personName) => expandedCard === personName;

    const reviews = [
        {
            avatar: '/images/reviewer1.png',
            name: 'Alice Johnson',
            rating: 5,
            review: 'Great service and an amazing selection of cars! Highly recommend this dealership.'
        },
        {
            avatar: '/images/reviewer2.png',
            name: 'Bob Smith',
            rating: 4,
            review: 'Friendly staff and a smooth buying process. Will definitely come back for my next car.'
        },
        {
            avatar: '/images/reviewer3.png',
            name: 'Carol Williams',
            rating: 5,
            review: 'Excellent experience! The team went above and beyond to find the perfect car for me.'
        }
    ];

    return (
        <>
            <NavBar />
            <Container className="root">
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <img src="/images/yellow_miata.jpeg" alt=" About Us" className="image" />
                    </Grid>
                    <Grid item xs={12} md={6} className="textContainer">
                        <Typography variant="h3" align="center" gutterBottom>
                            About Us
                        </Typography>
                        <Typography variant="body1" align="center" paragraph>
                            We are a team of passionate automotive enthusiasts committed to delivering the best car buying experience. Our car dealership is built on a foundation of trust, quality, and customer satisfaction. We aim to provide a diverse selection of vehicles and exceptional service to meet all your automotive needs.
                        </Typography>
                    </Grid>
                </Grid>

                <Box className="teamContainer" marginTop={10} marginBottom={20}>
                    <Typography variant="h4" align="center" gutterBottom>
                        Meet the Team
                    </Typography>
                    <Grid container spacing={4} justifyContent="center" marginTop={3}>
                        <Grid item xs={12} sm={6} md={4} className="gridItem">
                            <Card className={isCardExpanded('Shaan Malhotra') ? 'expandedCard' : 'card'} onClick={() => handleCardClick('Shaan Malhotra')}>
                                <CardContent>
                                    <Avatar className="avatar" alt="Shaan Malhotra" src="/images/shaan.png" />
                                    <Typography variant="h5" gutterBottom>
                                        Shaan Malhotra
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Co-Founder
                                    </Typography>
                                    {isCardExpanded('Shaan Malhotra') && (
                                        <>
                                            <Typography variant="body2" color="textSecondary">
                                                Email: shaan@example.com
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                Phone: +1234567890
                                            </Typography>
                                        </>
                                    )}
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} className="gridItem">
                            <Card className={isCardExpanded('Juan Pinol') ? 'expandedCard' : 'card'} onClick={() => handleCardClick('Juan Pinol')}>
                                <CardContent>
                                    <Avatar className="avatar" alt="Juan Pinol" src="/images/juan.png" />
                                    <Typography variant="h5" gutterBottom>
                                        Juan Pinol
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Co-Founder
                                    </Typography>
                                    {isCardExpanded('Juan Pinol') && (
                                        <>
                                            <Typography variant="body2" color="textSecondary">
                                                Email: juan@example.com
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                Phone: +1234567890
                                            </Typography>
                                        </>
                                    )}
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} className="gridItem">
                            <Card className={isCardExpanded('Noah Beito') ? 'expandedCard' : 'card'} onClick={() => handleCardClick('Noah Beito')}>
                                <CardContent>
                                    <Avatar className="avatar" alt="Noah Beito" src="/images/noah.png" />
                                    <Typography variant="h5" gutterBottom>
                                        Noah Beito
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Co-Founder
                                    </Typography>
                                    {isCardExpanded('Noah Beito') && (
                                        <>
                                            <Typography variant="body2" color="textSecondary">
                                                Email: noah@example.com
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                Phone: +1234567890
                                            </Typography>
                                        </>
                                    )}
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
                <Box className="reviewsContainer">
                    <Typography variant="h4" align="center" gutterBottom>
                        Customer Reviews
                    </Typography>
                    <Grid container spacing={4} justifyContent="center">
                        {reviews.map((review, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index} className="gridItem">
                                <Card className="reviewCard">
                                    <CardContent>
                                        <Avatar className="avatar" alt={review.name} src={review.avatar} />
                                        <Typography variant="h6" gutterBottom>
                                            {review.name}
                                        </Typography>
                                        <Rating value={review.rating} readOnly />
                                        <Typography variant="body2" color="textSecondary" paragraph>
                                            {review.review}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </>
    );
};

export default AboutUs;