import { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography, Box, FormControlLabel, Checkbox } from '@mui/material';
import NavBar from './components/NavBar.jsx';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminPassword, setAdminPassword] = useState('');
    const [avatar, setAvatar] = useState(null);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            let role = 'user';

            if (isAdmin) {
                if (adminPassword !== 'coolcars') {
                    setError('Incorrect admin password');
                    return;
                }
                role = 'admin';
            }

            const formData = new FormData();
            formData.append('firstName', firstName);
            formData.append('lastName', lastName);
            formData.append('email', email);
            formData.append('username', username);
            formData.append('password', password);
            formData.append('role', role);
            formData.append('avatar', avatar);

            try {
                await axios.post('/register', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                navigate('/login', { state: { message: 'Registration successful!' } });
                setFirstName('');
                setLastName('');
                setEmail(0);
                setUsername('');
                setPassword('');
                setConfirmPassword('');
                setIsAdmin(false);
                setAdminPassword('');
                setAvatar(null);
            } catch (error) {
                console.error('Error adding user:', error);
                alert('Failed to add user.');
            }

        } catch (error) {
            // Handle error response
            console.error('Error registering user:', error);
        }
    };

    return (
        <>
            <NavBar />
            <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Register
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Box sx={{ display: 'flex', gap: '1rem' }}>
                        <TextField
                            fullWidth
                            label="First Name"
                            variant="outlined"
                            margin="normal"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                        <TextField
                            fullWidth
                            label="Last Name"
                            variant="outlined"
                            margin="normal"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </Box>
                    <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        margin="normal"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
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
                    <TextField
                        fullWidth
                        label="Confirm Password"
                        variant="outlined"
                        margin="normal"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setAvatar(e.target.files[0])}
                        style={{ marginTop: '1rem' }}
                    />
                    <FormControlLabel
                        control={<Checkbox checked={isAdmin} onChange={(e) => setIsAdmin(e.target.checked)} />}
                        label="Is Admin"
                    />
                    {isAdmin && (
                        <TextField
                            fullWidth
                            label="Admin Password"
                            variant="outlined"
                            margin="normal"
                            type="password"
                            value={adminPassword}
                            onChange={(e) => setAdminPassword(e.target.value)}
                            required
                        />
                    )}
                    {error && <Typography color="error">{error}</Typography>}
                    <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '1rem' }}>
                        Register
                    </Button>
                </form>
            </Container>
        </>
    );
};

export default Register;