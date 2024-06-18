import { Box, Typography, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ReviewCard from './ReviewCard';
import FilterReviews from './FilterReviews';

const CustomerReviewsSection = ({ reviews, filter, handleFilterChange }) => (
    <Box>
        <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold' }}>
            Customer Reviews
        </Typography>
        <FilterReviews filter={filter} handleFilterChange={handleFilterChange} />
        <Grid container spacing={4}>
            {reviews.map((review) => (
                <Grid item xs={12} sm={6} md={4} key={review.id}>
                    <ReviewCard review={review} />
                </Grid>
            ))}
        </Grid>
    </Box>
);

export default CustomerReviewsSection;