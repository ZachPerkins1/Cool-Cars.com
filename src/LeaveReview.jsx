import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Rating, Box } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';

const LeaveReview = () => {
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = JSON.parse(sessionStorage.getItem('userData'));

        if (!user) {
            setError('User not logged in');
            return;
        }

        const formData = new FormData();
        formData.append('name', user.username);
        formData.append('review', review);
        formData.append('rating', rating);
        formData.append('avatar', user.avatar);

        try {
            await axios.post('/reviews', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('Review submitted successfully!');
            setReview('');
            setRating(0);
            navigate('/');
        } catch (error) {
            console.error('Error submitting review:', error);
            alert('Failed to submit review.');
        }
    };

    return (
        <>
            <NavBar />
            <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Leave a Review
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Review"
                        variant="outlined"
                        margin="normal"
                        multiline
                        rows={4}
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        required
                    />
                    <Box component="fieldset" mb={3} borderColor="transparent">
                        <Typography component="legend">Rating</Typography>
                        <Rating
                            name="rating"
                            value={rating}
                            onChange={(event, newValue) => setRating(newValue)}
                            required
                        />
                    </Box>
                    {error && <Typography color="error">{error}</Typography>}
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Submit Review
                    </Button>
                </form>
            </Container>
        </>
    );
};

export default LeaveReview;