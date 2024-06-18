import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
    return (
        <Box sx={{ backgroundColor: '#333', color: '#fff', mt: 4, py: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', mb: 2 }}>
                <Link href="#" color="inherit">Terms & Conditions</Link>
                <Link href="#" color="inherit">Privacy Notice</Link>
                <Link href="#" color="inherit">Cookie Preferences</Link>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                <Link href="#" color="inherit" sx={{ mx: 1 }}><FacebookIcon /></Link>
                <Link href="#" color="inherit" sx={{ mx: 1 }}><TwitterIcon /></Link>
                <Link href="#" color="inherit" sx={{ mx: 1 }}><InstagramIcon /></Link>
            </Box>
            <Typography variant="body2" align="center">© 2024 Cool Cars. All Rights Reserved.</Typography>
        </Box>
    );
}

export default Footer;