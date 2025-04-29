import React, { useState } from 'react';
import { Drawer, IconButton, List, ListItem,ListItemText, ListItemButton, Box, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const SideDrawer = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  return (
    <Box sx={{ display: { xs: 'flex', sm: 'none'}}}>
      {/* Menu Icon to open the drawer */}
      <IconButton onClick={toggleDrawer(true)} sx={{ color: '#fff'}}>
        <MenuIcon />
      </IconButton>

      {/* Drawer positioned on the right */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)} sx={{color:'gray'}}>
        <List sx={{ width: 250 , bgcolor:'gray', height: '100%'}}>
          <ListItemButton>
            <ListItemText primary="Home"  />
          </ListItemButton>
          <Divider/>
          <ListItemButton>
            <ListItemText primary="About" />
          </ListItemButton>
          <Divider/>
          <ListItemButton>
            <ListItemText primary="Services" />
          </ListItemButton>
          <Divider/>
          <ListItemButton>
            <ListItemText primary="Contact" />
          </ListItemButton>
        </List>
      </Drawer>
    </Box>
  );
};

export default SideDrawer;