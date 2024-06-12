import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import axios from 'axios';
import { useNavigate, useOutletContext } from 'react-router-dom';
import NavBar from './components/NavBar';

export default function AddCar () {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
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

    return (
        <>
            <NavBar />
            <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Add a Car:
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Box sx={{ display: 'flex', gap: '1rem' }}>
                        <TextField
                            fullWidth
                            label="Make"
                            variant="outlined"
                            margin="normal"
                            value='Make'
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                        <TextField
                            fullWidth
                            label="Model"
                            variant="outlined"
                            margin="normal"
                            value='Model'
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </Box>
                    <TextField
                        fullWidth
                        label="VIN Number"
                        variant="outlined"
                        margin="normal"
                        value='#################'
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <TextField
                        fullWidth
                        label="Username"
                        variant="outlined"
                        margin="normal"
                        value='Car Year'
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <TextField
                        fullWidth
                        label="Password"
                        variant="outlined"
                        margin="normal"
                        type="password"
                        value='Car VIN'
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <TextField
                        fullWidth
                        label="Confirm Password"
                        variant="outlined"
                        margin="normal"
                        type="password"
                        value='Car Color'
                        onChange={(e) => setConfirmPassword(e.target.value)}
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
        
        </>
    );
};