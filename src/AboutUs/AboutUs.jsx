import { Container, Box, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar.jsx';
import HeaderSection from './HeaderSection.jsx';
import MeetTheTeam from './MeetTheTeam.jsx';
import ImageCarousel from '../components/ImageCarousel.jsx';
import CustomerReviews from './CustomerReviews.jsx';
import './AboutUs.css';
import GoogleMapComponent from '../components/GoogleMap.jsx'; // Adjust the import path as needed



const AboutUs = () => {
    const [expandedCard, setExpandedCard] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [filter, setFilter] = useState('newest');
    // const classes = useStyles();

    const handleCardClick = (personName) => {
        setExpandedCard((prev) => (prev === personName ? null : personName));
    };

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const getFilteredReviews = () => {
        switch (filter) {
            case 'mostPositive':
                return [...reviews].sort((a, b) => b.rating - a.rating);
            case 'mostCritical':
                return [...reviews].sort((a, b) => a.rating - b.rating);
            case 'newest':
                return [...reviews].sort((a, b) => new Date(b.date) - new Date(a.date));
            default:
                return reviews;
        }
    };

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get('http://localhost:3000/reviews');
                if (Array.isArray(response.data)) {
                    setReviews(response.data);
                } else {
                    console.error('Invalid data format received:', response.data);
                }
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };

        fetchReviews();
    }, []);

    return (
        <>
            <NavBar />
            <Container maxWidth="lg" style={{ marginTop: '2rem', backgroundColor: '#bbdefb', padding: '2rem', borderRadius: '8px' }} >
                <HeaderSection />
                <MeetTheTeam expandedCard={expandedCard} handleCardClick={handleCardClick} />
                <Box className="carouselContainer" marginBottom={10} >
                    <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold' }}>
                        Explore Our Dealership
                    </Typography>
                    <ImageCarousel />
                </Box>
                <Box className="mapContainer" sx={{ marginTop: 5 }}>
                    <Typography variant='h4' align='center'>
                        Visit Us
                    </Typography>
                    <GoogleMapComponent />
                    <Typography variant='h6' align='center'>
                        Cool Cars Dealership
                        {'\n'}1234 Ocean Drive
                        {'\n'}Miami, FL 33139
                        {'\n'}USA
                    </Typography>
                </Box>
                <Box className="reviewContainer" sx={{ marginTop: 5 }}>
                    <CustomerReviews reviews={getFilteredReviews()} filter={filter} handleFilterChange={handleFilterChange} />
                </Box>
            </Container>
        </>
    );
};

export default AboutUs;

