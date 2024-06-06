import { Container, Typography, Card, CardContent, Avatar, Grid } from '@mui/material';
import './AboutUs.css';



const AboutUs = () => {
    return (
        <Container className="root">
            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6}>
                    <img src="/path/to/your/image.jpg" alt="About Us" className="image" />
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

            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} sm={6} md={4} className="gridItem">
                    <Card className="card">
                        <CardContent>
                            <Avatar className="avatar" alt="Shaan Malhotra" src="/path/to/image.jpg" />
                            <Typography variant="h5" gutterBottom>
                                Shaan Malhotra
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Co-Founder
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} className="gridItem">
                    <Card className="card">
                        <CardContent>
                            <Avatar className="avatar" alt="Juan Pinol" src="/path/to/image.jpg" />
                            <Typography variant="h5" gutterBottom>
                                Juan Pinol
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Co-Founder
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} className="gridItem">
                    <Card className="card">
                        <CardContent>
                            <Avatar className="avatar" alt="Noah Beito" src="/path/to/image.jpg" />
                            <Typography variant="h5" gutterBottom>
                                Noah Beito
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Co-Founder
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AboutUs;