import {Card, CardMedia, Typography, CardContent} from '@mui/material';

function CarCard() {

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="194"
                image="https://hips.hearstapps.com/hmg-prod/images/mac01634-1661870031.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=1200:*"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Experience the thrill of driving with this stunning 2019 Mazda
                    Miata in vibrant Sunshine Yellow. This iconic roadster combines
                    classic sports car charm with modern technology, offering an exhilarating
                    open-air driving experience.
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CarCard;