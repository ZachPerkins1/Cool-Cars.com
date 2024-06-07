import { Link } from 'react-router-dom';
import Navbar from './components/NavBar';
import { Grid, TextField, Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import CarCard from './components/CarCard.jsx';
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
            <Grid container>
                <Grid item lg={3} sx={{ ml: 12, mt: 4 }}>
                    <h2>
                        Filters:
                    </h2>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="Automatic Transmission" />
                        <FormControlLabel control={<Checkbox />} label="Manual Transmission" />
                        <FormControlLabel control={<Checkbox />} label="SUV" />
                        <FormControlLabel control={<Checkbox />} label="Two Doors" />
                        <FormControlLabel control={<Checkbox />} label="Four Doors" />
                        <FormControlLabel control={<Checkbox />} label="Convertible" />
                    </FormGroup>
                </Grid>
                <Grid lg={8} sx={{ mt: 4 }}>
                    <h2>Search for a car:</h2>
                    <TextField id="outlined-basic" label="Search for a Car" variant="outlined" />
                    <Grid container sx={{mt: 3}} spacing={4}>
                        <Grid item >
                            <CarCard></CarCard>
                        </Grid>
                        <Grid item >
                            <CarCard></CarCard>
                        </Grid>
                        <Grid item >
                            <CarCard></CarCard>
                        </Grid>
                        <Grid item >
                            <CarCard></CarCard>
                        </Grid>
                        <Grid item >
                            <CarCard></CarCard>
                        </Grid>
                        <Grid item >
                            <CarCard></CarCard>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default InventoryPage