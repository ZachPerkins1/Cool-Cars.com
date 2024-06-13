import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Typography, Box, Paper } from '@mui/material';
import axios from 'axios';
import dayjs from 'dayjs';
import { useNavigate, useOutletContext } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs/index.js'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { YearCalendar } from '@mui/x-date-pickers/YearCalendar';
import InputAdornment from "@material-ui/core/InputAdornment";

const getModels = async () => {
    const { data } = await axios.get('http://localhost:3000/models');
    return data;
}

const getMakes = async () => {
    const { data } = await axios.get('http://localhost:3000/makes');
    return data;
}

const getColors = async () => {
    const { data } = await axios.get('http://localhost:3000/colors');
    return data;
}

const getFuelTypes = async () => {
    const { data } = await axios.get('http://localhost:3000/fuels');
    return data;
}

const getBodyStyles = async () => {
    const { data } = await axios.get('http://localhost:3000/bodies');
    return data;
}


export default function AddCar() {
    const [make, setMake] = useState('')
    const [makes, setMakes] = useState([])

    const [model, setModel] = useState('')
    const [models, setModels] = useState([])

    const [color, setColor] = useState('')
    const [colors, setColors] = useState([])

    const [fuelType, setFuelType] = useState('')
    const [fuelTypes, setFuelTypes] = useState([])

    const [bodyStyle, setBodyStyle] = useState('')
    const [bodyStyles, setBodyStyles] = useState([]);

    const [miles, setMiles] = useState(0)
    const [price, setPrice] = useState(0)

    const handleMakeChange = (event) => {
        setMake(event.target.value);
    };

    const handleModelChange = (event) => {
        setModel(event.target.value);
    };

    const handleColorChange = (event) => {
        setColor(event.target.value);
    }

    const handleBodyChange = (event) => {
        setBodyStyle(event.target.value);
    };

    const handleYearChange = (event) => {
        setMake(event.target.value);
    };

    const handleFuelChange = (event) => {
        console.log('fuel')
        setFuelType(event.target.value);
    };


    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // const response = await axios.post('/addcar', { username, password });
            // const userData = response.data;

            // Redirect to home page
            navigate('/inventory');
        } catch (error) {
            setError('Could not add car.');
        }
    };

    useEffect(() => {
        getMakes().then((data) => setMakes(data))
        getModels().then((data) => setModels(data))
        getColors().then((data) => setColors(data))
        getFuelTypes().then((data) => setFuelTypes(data))
        getBodyStyles().then((data) => setBodyStyles(data))
        console.log('loaded')
    }, [])

    return (
        <>
            <NavBar />
            <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Add a Car:
                </Typography>

                <div>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-helper-label">Make</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={make}
                            label="Make"
                            onChange={handleMakeChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {makes.map((make) => <MenuItem id={make.id} value={make.make} key={make.id}>{make.make}</MenuItem>)}
                            <MenuItem value={10}>Ten</MenuItem>
                        </Select>
                        <FormHelperText>Choose a Make</FormHelperText>
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-helper-label">Model</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={model}
                            label="Model"
                            onChange={handleModelChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {models.map((model) => <MenuItem id={model.id} value={model.model} key={model.id}>{model.model}</MenuItem>)}

                        </Select>
                        <FormHelperText>Choose a Model</FormHelperText>
                    </FormControl>
                </div>

                <div>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="color-input">Color</InputLabel>
                        <Select
                            labelId="color-input"
                            id="color-input-select"
                            value={color}
                            label="Color"
                            onChange={handleColorChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {colors.map((color) => <MenuItem id={color.id} value={color.color} key={color.id}>{color.color}</MenuItem>)}
                        </Select>
                        <FormHelperText>What Color is the vehicle?</FormHelperText>
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="body-style-input">Body Style</InputLabel>
                        <Select
                            labelId="body-style-input"
                            id="body-style-input-select"
                            value={bodyStyle}
                            onChange={handleBodyChange}
                        >
                            <MenuItem value="">
                                <em>Body Style</em>
                            </MenuItem>
                            {bodyStyles.map((body) => <MenuItem id={body.id} value={body.body_style} key={body.id}>{body.body_style}</MenuItem>)}
                        </Select>
                        <FormHelperText>Without label</FormHelperText>
                    </FormControl>
                </div>
                <div>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <TextField inputProps={{ type: 'number' }} />
                    </FormControl>
                </div>
                <div>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <TextField InputProps={{
                            type: 'number',
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }} />
                    </FormControl>
                </div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['YearCalendar', 'MonthCalendar']}>
                        <DemoItem label="What model year is the car?">
                            <YearCalendar
                                defaultValue={dayjs('2024')}
                                minDate={dayjs('1990-01-25')}
                                maxDate={dayjs('2024-01-25')}
                            />
                        </DemoItem>
                    </DemoContainer>
                </LocalizationProvider>

                <form onSubmit={handleSubmit}>
                    {/* <Box sx={{ display: 'flex', gap: '1rem' }}>
                    </Box> */}
                    <TextField
                        fullWidth
                        label="VIN Number"
                        variant="outlined"
                        margin="normal"
                        value='#################'
                        // onChange={(e) => setEmail(e.target.value)}
                        required
                    />


                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setAvatar(e.target.files[0])}
                        style={{ marginTop: '1rem' }}
                    />
                    {error && <Typography color="error">{error}</Typography>}
                    <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '1rem' }}>
                        Add Car
                    </Button>
                </form>
            </Container>



            <Footer sx={{
                marginTop: 'calc(10% + 60px)',
                width: '100%',
                position: 'fixed',
                bottom: 0,
            }} />
        </>
    );
};