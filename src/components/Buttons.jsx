import React from "react";
import { Button, Stack } from '@mui/material';

const Buttons = () => {
  return (
    <Stack  spacing={1} direction="row" sx={{ 
        display: { xs: 'none', sm: 'flex' }, // Hide buttons on small screens
      }}>
        <Button  sx={{fontFamily:'monospace', color:'inherit'}}>Home</Button>
        <Button sx={{fontFamily:'monospace', color:'inherit'}}>Gallery</Button>
        <Button sx={{fontFamily:'monospace', color:'inherit'}}>ContactUs</Button>
    </Stack>
  );
}
export default Buttons;