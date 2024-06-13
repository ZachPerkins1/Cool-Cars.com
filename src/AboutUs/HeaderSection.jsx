import { Grid, Typography } from '@mui/material';
import yellowMiata from '../assets/yellow_miata.png';

const HeaderSection = () => (
    <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
            <img src={yellowMiata} alt="About Us" style={{ width: '100%' }} />
        </Grid>
        <Grid item xs={12} md={6}>
            <Typography variant="h3" align="center" gutterBottom style={{ fontWeight: 'bold' }}>
                About Us
            </Typography>
            <Typography variant="body1" align="center" paragraph>
                We are a team of passionate automotive enthusiasts committed to delivering the best car buying experience. Our car dealership is built on a foundation of trust, quality, and customer satisfaction. We aim to provide a diverse selection of vehicles and exceptional service to meet all your automotive needs.
            </Typography>
        </Grid>
    </Grid>
);

export default HeaderSection;