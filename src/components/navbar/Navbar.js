import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Navbar = () => (
    <AppBar 
      position="sticky" 
      elevation={0}
      sx={{ 
        marginBottom: '20px',
        height: '40px',
        display: 'flex',
        justifyContent: 'center'
      }}
    > 
      <Toolbar>
        <Typography 
          variant="h1" 
          component="div" 
          sx={{ 
            fontSize: '24px',
            fontWeight: 500,
            paddingLeft: '10px'
          }}
        >
          ImageFinder
        </Typography>
      </Toolbar>
    </AppBar>
  );

export default Navbar