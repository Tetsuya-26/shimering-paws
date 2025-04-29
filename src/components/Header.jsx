import React from "react";
import Buttons from "./Buttons";
import SideDrawer from "./SideDrawer";
import { AppBar,Box, Toolbar, IconButton, Typography } from '@mui/material';
import PetsRoundedIcon  from '@mui/icons-material/PetsRounded';


const Header = () => {
    return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
            <Toolbar>
                <IconButton >
                    <PetsRoundedIcon sx={{ color: '#fff'}} />   
                </IconButton>
                    <Typography variant="h6" component="div" sx={{ fontFamily:'Monospace',flexGrow: 1, ml: 1, fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' } }}>
                        Shimering Paws
                    </Typography>
                <Buttons/>
                <SideDrawer sx={{bgcolor:'#b71c1c'}}/>    
            </Toolbar>
        </AppBar>
    </Box> 
    );

}
export default Header;