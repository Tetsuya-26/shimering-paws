import React from "react";
import { Button, Stack } from '@mui/material';

const Buttons = () => {
  return (
    <Stack  spacing={1} direction="row" sx={{ 
        display: { xs: 'none', sm: 'flex' }, // Hide buttons on small screens
      }}>
        <Button  sx={{fontFamily:'monospace', color:'inherit'}}
        value="Home"
        primary="Home"
        onClick={() =>
            document.getElementById("Home")
              .scrollIntoView({ behavior: "smooth" })
          } >
            Home</Button>
        <Button sx={{fontFamily:'monospace', color:'inherit'}}
        value="Gallery"
        primary="Gallery"
        onClick={() =>
            document.getElementById("Gallery")
              .scrollIntoView({ behavior: "smooth" })
          } >
            Gallery</Button>
        <Button sx={{fontFamily:'monospace', color:'inherit'}}
        value="Contact"
        primary="Contact"
        onClick={() =>
            document.getElementById("Contact")
              .scrollIntoView({ behavior: "smooth" })
          } >
            ContactUs</Button>
    </Stack>
  );
}
export default Buttons;