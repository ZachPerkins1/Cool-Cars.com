import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import axios from 'axios';
import { useNavigate, useOutletContext } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/login', { username, password });
            const userData = response.data;

            // Store user data in session storage
            sessionStorage.setItem('userData', JSON.stringify(userData));
            alert('login succesfull');

            // Redirect to home page
            navigate('/');
        } catch (error) {
            setError('Invalid username or password');
        }
    };

    return (
        <>
            <NavBar />
            <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Login
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Username"
                        variant="outlined"
                        margin="normal"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <TextField
                        fullWidth
                        label="Password"
                        variant="outlined"
                        margin="normal"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {error && <Typography color="error">{error}</Typography>}
                    <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '1rem' }}>
                        Login
                    </Button>
                </form>
            </Container>
        </>
    );
};

export default Login;