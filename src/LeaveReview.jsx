import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Rating, Box } from '@mui/material';
import axios from 'axios';

const LeaveReview = () => {
    const [name, setName] = useState('');
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);
    const [avatar, setAvatar] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('review', review);
        formData.append('rating', rating);
        formData.append('avatar', avatar);

        try {
            await axios.post('/reviews', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('Review submitted successfully!');
            setName('');
            setReview('');
            setRating(0);
            setAvatar(null);
        } catch (error) {
            console.error('Error submitting review:', error);
            alert('Failed to submit review.');
        }
    };

    return (
        <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
            <Typography variant="h4" align="center" gutterBottom>
                Leave a Review
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    margin="normal"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
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
                <Box mb={3}>
                    <input
                        accept="image/*"
                        type="file"
                        onChange={(e) => setAvatar(e.target.files[0])}
                    />
                </Box>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Submit Review
                </Button>
            </form>
        </Container>
    );
};

export default LeaveReview;