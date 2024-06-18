import { Card, CardContent, Avatar, Typography, Rating, Box } from '@mui/material';

const ReviewCard = ({ review }) => (
    <Card>
        <CardContent>
            <Avatar style={{ margin: '0 auto', width: 100, height: 100 }} src={`http://localhost:3000${review.avatar}`} alt={review.name} />
            <Typography variant="h5" align="center" gutterBottom>
                {review.name}
            </Typography>
            <Box display="flex" justifyContent="center" marginBottom={2}>
                <Rating value={review.rating} readOnly />
            </Box>
            <Typography variant="body1" align="center">
                {review.review}
            </Typography>
        </CardContent>
    </Card>
);

export default ReviewCard;