import React from "react";
import { Button, Stack } from '@mui/material';

const Buttons = () => {
  return (
    <Stack spacing={1} direction="row" sx={{
        display: { xs: 'none', sm: 'flex' }, // Hide buttons on small screens
      }}>
        <Button color="inherit">Home</Button>
        <Button color="inherit">About</Button>
        <Button color="inherit">Services</Button>
        <Button color="inherit">Contact</Button>
    </Stack>
  );
}
export default Buttons;