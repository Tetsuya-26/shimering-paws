import React from "react";
import Buttons from "./Buttons";
import SideDrawer from "./Sidedrawer";
import { AppBar,Box, Toolbar, IconButton, Typography } from '@mui/material';
import PetsRoundedIcon  from '@mui/icons-material/PetsRounded';

const Header = () => {
    return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
                <IconButton >
                    <PetsRoundedIcon sx={{ color: '#fff',  }} />   
                </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 1, fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' } }}>
                        Shimering Paws
                    </Typography>
                <Buttons/>
                <SideDrawer/>    
            </Toolbar>
        </AppBar>
    </Box> 
    );

}
export default Header;