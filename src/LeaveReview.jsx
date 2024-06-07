import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Rating, Box } from '@mui/material';

const LeaveReview = () => {
    const [name, setName] = useState('');
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission logic (e.g., send data to the server)
        console.log({ name, review, rating });
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
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Submit Review
                </Button>
            </form>
        </Container>
    );
};

export default LeaveReview;