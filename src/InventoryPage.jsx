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

                <Grid container justifyContent="center" columns={1}>
                    <Grid item >
                        <TextField id="outlined-basic" label="Search for a Car" variant="outlined" />
                    </Grid>
                    <Grid item >
                    <Grid container columns={2}>
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
                        <CarCard></CarCard>
                    </Grid>
                </Grid>
            </Grid>
        </>

    )
}

export default InventoryPage