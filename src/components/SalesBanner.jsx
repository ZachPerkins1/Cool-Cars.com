import * as React from 'react';
import { Box } from '@mui/material';

function SalesBanner({message}) {
  return (
    // <Alert style={{ color: 'red', backgroundColor: 'lightgray' }}>
    //     {message}
    // </Alert>
    <>
      <Box sx={{ width: '100%', border: '1px solid blue', bgcolor: 'cornflowerblue'}}>
        <p>{message}</p>
      </Box>
    </>
  );
}

export default SalesBanner;