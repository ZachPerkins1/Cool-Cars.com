import { useState, useEffect, useContext } from 'react';
import { Container, TextField, Button, Typography, Alert } from '@mui/material';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import { FavoritesContext } from './contexts/FavoritesContext.jsx';
import theme from './theme.jsx';
import { ThemeProvider } from '@mui/material/styles';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [successMessage, setSuccessMessage] = useState('');
    const location = useLocation();
    const { setFavorites } = useContext(FavoritesContext);

    useEffect(() => {
        if (location.state && location.state.message) {
            setSuccessMessage(location.state.message);
        }
    }, [location.state]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/login', { username, password });
            const userData = response.data;
            const userId = userData.id;

            // Store user data in session storage
            sessionStorage.setItem('userData', JSON.stringify(userData));

            // Get user favorites and set favorites context
            const favoritesResponse = await axios.get(`http://localhost:3000/favorites`, { params: { userId } });
            setFavorites(favoritesResponse.data);

            // Redirect to home page
            navigate('/');
        } catch (error) {
            setError('Invalid username or password');
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <NavBar />
                <Container maxWidth="sm" style={{ marginTop: '2rem', flexGrow: 1 }}>
                    {successMessage && (
                        <Alert severity="success" sx={{ mb: 2 }}>
                            {successMessage}
                        </Alert>
                    )}
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
                <Footer />
            </div>
        </ThemeProvider>
    );
};

export default Login;