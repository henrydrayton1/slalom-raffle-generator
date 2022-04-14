import { Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import React from 'react';

const drawerWidth = 240;

export const SideBar = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ backgroundColor: 'blue', height: 100 }}>
        <Toolbar>
          <Box sx={{ mt: 1.5 }}>
            <Image src="/slalom.png" width="192" height="68.02" component="div" />
          </Box>
          <Typography>2022 Food Drive</Typography>
        </Toolbar>
      </AppBar>
      <Box></Box>
    </Box>
  );
};
