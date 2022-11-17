import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Container maxWidth="md">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Matt Sales
            </Typography>
            <Button color="inherit">
              Login
            </Button>
          </Toolbar>
         </Container>
        </AppBar>
    </Box>
  );
}