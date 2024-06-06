import { Link } from 'react-router-dom';
import Navbar from './components/NavBar';
import { Grid, TextField, Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

function InventoryPage() {

    return (
        <>
            <Navbar></Navbar>
            <Grid container spacing={4} alignItems="center">
                <Grid item xs={4}>
                    <Link to={`/`}>
                        <button variant="contained">Link to Home.</button>
                    </Link>
                    <h2>
                        Filters:
                    </h2>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                        <FormControlLabel control={<Checkbox />} label="Required" />
                        <FormControlLabel control={<Checkbox />} label="Disabled" />
                    </FormGroup>
                </Grid>
                <Grid item xs={8}>
                    <TextField id="outlined-basic" label="Search for a Car" variant="outlined" />
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
                </Grid>
            </Grid>
        </>

    )
}

export default InventoryPage