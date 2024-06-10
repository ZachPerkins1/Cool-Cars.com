import * as React from 'react';
import { Box } from '@mui/material';
import './SalesBanner.css';

function SalesBanner({message}) {
  return (
    <>
      <Box sx={{ height: '40px', width: '100%', bgcolor: 'rgba(255, 99, 71, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ mr: 4 }}>
          <p>SUMMER SALE ON NOW</p>
        </Box>
        <Box sx={{ width: '60%', overflow: 'hidden' }}> {/* Add a container for the ticker text */}
          <p className="ticker">{message}</p> {/* Add the ticker class to the p element */}
        </Box>
      </Box>
    </>
  );
}

export default SalesBanner;