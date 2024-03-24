import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import { Button, Typography } from '@mui/material';

export default function AdminAppBar({ drawerWidth}) {

    return (
        <Box sx={{ display: 'flex', mb: '100px'}}>
          <CssBaseline />
          <AppBar component="nav" sx={{backgroundColor: 'white', color: 'black', boxShadow: 2, width: `calc(100% - ${drawerWidth}px)`}}>
            <Toolbar>
              <Box sx={{width: '100%', mx: {lg:3, md: 0}, display: 'flex', justifyContent: 'space-between', alignItems: 'center',}}>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <Typography variant='h6' fontWeight={600}>Admin Panel</Typography>
                </Box>
                {/* <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <Button variant='h6' fontWeight={600}>Log Out</Button>
                </Box> */}
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
      );
    }