import { Link } from 'react-router-dom';
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
                        image="https://mui.com/static/images/cards/paella.jpg"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                            if you like.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default InventoryPage