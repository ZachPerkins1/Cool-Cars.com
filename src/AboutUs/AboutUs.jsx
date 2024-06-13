import { Container, Box, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import NavBar from '../components/NavBar.jsx';
import HeaderSection from './HeaderSection.jsx';
import MeetTheTeam from './MeetTheTeam.jsx';
import ImageCarousel from '../components/ImageCarousel.jsx';
import CustomerReviews from './CustomerReviews.jsx';
import './AboutUs.css';

const AboutUs = () => {
    const [expandedCard, setExpandedCard] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [filter, setFilter] = useState('newest');

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
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Helmet>
            <NavBar />
            <Container maxWidth="lg" style={{ marginTop: '2rem' }}>
                <HeaderSection />
                <MeetTheTeam expandedCard={expandedCard} handleCardClick={handleCardClick} />
                <Box marginBottom={10}>
                    <Typography variant="h4" align="center" gutterBottom>
                        Explore Our Dealership
                    </Typography>
                    <ImageCarousel />
                </Box>
                <CustomerReviews reviews={getFilteredReviews()} filter={filter} handleFilterChange={handleFilterChange} />
            </Container>
        </>
    );
};

export default AboutUs;