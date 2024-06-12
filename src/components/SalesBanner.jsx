import * as React from 'react';
import { Box, Typography } from '@mui/material';
import './SalesBanner.css';

function SalesBanner({message}) {
  return (
    <>
      <Box sx={{ height: '40px', width: '100%', bgcolor: '#bbdefb', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ mr: 4 }}>
          <p>SUMMER SALE ON NOW</p>
        </Box>
        <Box sx={{ width: '60%', overflow: 'hidden' }}>
          <Typography className="ticker" sx={{ fontFamily: 'Figtree, Roboto, sans-serif' }}>{message}</Typography>
        </Box>
      </Box>
    </>
  );
}

export default SalesBanner;