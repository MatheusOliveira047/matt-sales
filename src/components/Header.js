import Link from 'next/link';

import { useState } from 'react';

import { 
  Container,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  AppBar,
  Avatar,
  Menu,
  MenuItem,
  Divider
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import { AccountCircle } from '@mui/icons-material';


export default function ButtonAppBar() {
  const [anchorUserMenu,setAnchorUserMenu] = useState(false)

  const openUserMenu = Boolean(anchorUserMenu)



  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" elevation={3}>
          <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
              <Link href='/' passHref >
                Matt Sales
              </Link>
            </Typography>
            <Link href={"/user/publish"} passHref>
              <Button color="inherit" variant='outlined'>
              Anunciar e Vender
              </Button>
            </Link>
            <IconButton 
              color='secondary' 
              onClick={(e) => setAnchorUserMenu(e.currentTarget)}
            >
            {
              true === false

              ? <Avatar
              src={""}
              />

              : <AccountCircle/>
            }
              
            <Typography 
            variant='subtitle2' 
            color="secondary" 
            sx={{marginLeft: '6px'}}
            
            >
              Matheus Oliveira
            </Typography>
            </IconButton>

            <Menu
              anchorEl={anchorUserMenu}
              open={openUserMenu}
              onClose={() => setAnchorUserMenu(null)}
            >
             <Link href={'/user/dashbord'} passHref>
              <MenuItem>Meus Anúncios</MenuItem>
             </Link>
             <Link href={'/user/publish'} passHref>
              <MenuItem>Publicar novo anúncio</MenuItem>
             </Link>
              <Divider/>
              <MenuItem>Sair</MenuItem>
            </Menu>

          </Toolbar>
         </Container>
        </AppBar>
    </Box>
  );
}