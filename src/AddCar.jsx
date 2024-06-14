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
    // implement something like this later
    // const [options, setOptions] = useState({
    //     makes: [],
    //     models: [],
    // })
    // 
    // const [userPicked, setUserPicked] = useState({})

    const [make, setMake] = useState('')
    const [makes, setMakes] = useState([])

    const [model, setModel] = useState('')
    const [models, setModels] = useState([])

    const [isDisabled, setDisabled] = useState(true)

    const [color, setColor] = useState('')
    const [colors, setColors] = useState([])

    const [fuelType, setFuelType] = useState('')
    const [fuelTypes, setFuelTypes] = useState([])

    const [bodyStyle, setBodyStyle] = useState('')
    const [bodyStyles, setBodyStyles] = useState([]);

    const [VIN, setVIN] = useState('')

    const [miles, setMiles] = useState(0)
    const [price, setPrice] = useState(0)
    const [year, setYear] = useState(0)

    const handleMakeChange = (event) => {
        setMake(event.target.value);
        setDisabled(false)
        setModels(models.filter((model) => {
            return (Number(model.make_id)) === Number(event.target.value)
        }))
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
        console.log(event.$y)
        setYear(event.$y);
    };

    const handleFuelChange = (event) => {
        setFuelType(event.target.value);
    };

    const handleMileChange = (event) => {
        setMiles(event.target.value)
    }

    const handlePriceChange = (event) => {
        setPrice(event.target.value)
    }

    const handleVINChange = (event) => {
        console.log(VIN)
        setVIN(event.target.value);
    }


    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let pickedOptions = {
            "year": year,
            "make_id": make,
            "model_id": model,
            "color_id": color,
            "body_id": bodyStyle,
            "mileage": miles,
            "fuel_id": fuelType,
            "promo_id": 1,
            "arrival_date": (new Date()).toISOString().split('T')[0],
            "price": price,
            "availability": true,
            "date_sold": null,
            "image_id": 1
        }

        console.log(pickedOptions)
        try {
            const response = await axios.post('http://localhost:3000/cars', pickedOptions);
            const carAdded = response.data;
            console.log(carAdded)

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
                <form onSubmit={handleSubmit}>
                    <div>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-helper-label">Make</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={make}
                                label="Make"
                                required
                                onChange={handleMakeChange}
                            >
                                {makes.map((make) => <MenuItem id={make.id} value={make.id} key={make.id}>{make.make}</MenuItem>)}
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
                                required
                                onChange={handleModelChange}
                            >
                                {models.map((model) => <MenuItem id={model.id} value={model.id} key={model.id} disabled={isDisabled}>{model.model}</MenuItem>)}

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
                                required
                                onChange={handleColorChange}
                            >
                                {colors.map((color) => <MenuItem id={color.id} value={color.id} key={color.id}>{color.color}</MenuItem>)}
                            </Select>
                            <FormHelperText>What Color is the vehicle?</FormHelperText>
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="body-style-input">Body</InputLabel>
                            <Select
                                labelId="body-style-input"
                                id="body-style-input-select"
                                value={bodyStyle}
                                label='Body'
                                required
                                onChange={handleBodyChange}
                            >
                                {bodyStyles.map((body) => <MenuItem id={body.id} value={body.id} key={body.id}>{body.body_style}</MenuItem>)}
                            </Select>
                            <FormHelperText>What kind of vehicle is it?</FormHelperText>
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="fuel-type-label">Fuel</InputLabel>
                            <Select
                                labelId="fuel-type-label"
                                id="fuel-type"
                                value={fuelType}
                                required
                                label="Fuel"
                                onChange={handleFuelChange}
                            >
                                {fuelTypes.map((fuelType) => <MenuItem id={fuelType.id} value={fuelType.id} key={fuelType.id}>{fuelType.fuel_type}</MenuItem>)}
                            </Select>
                            <FormHelperText>Choose a Model</FormHelperText>
                        </FormControl>
                    </div>
                    <div>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <TextField
                                onChange={handleMileChange}
                                label="Mileage"
                                required
                                inputProps={{ type: 'number', min:0 }} />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <TextField
                                onChange={handlePriceChange}
                                label="Price"
                                required
                                inputProps={{
                                    type: 'number',
                                    min:0,
                                }}
                                InputProps={{
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
                                    yearsPerRow={4}
                                    onChange={handleYearChange}
                                    required
                                />
                            </DemoItem>
                        </DemoContainer>
                    </LocalizationProvider>
                    <TextField
                        fullWidth
                        label="VIN Number"
                        variant="outlined"
                        margin="normal"
                        defaultValue='#################'
                        minLength='17'
                        onFocus={(e) => e.target.setSelectionRange(0, e.target.value.length)}
                        onChange={handleVINChange}
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