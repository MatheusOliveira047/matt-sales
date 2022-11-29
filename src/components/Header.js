import Link from 'next/link';

import { useState } from 'react';

import { useSession, signOut } from 'next-auth/client'



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

  const [session] = useSession()
  

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
            <Link href={session ? '/auth/publish' : '/auth/signin'} passHref>
              <Button color="inherit" variant='outlined'>
              Anunciar e Vender
              </Button>
            </Link>
            {
              session && (
                <IconButton 
              color='secondary' 
              onClick={(e) => setAnchorUserMenu(e.currentTarget)}
            >
            {
              session.user.image

              ? <Avatar
              src={session.user.image}
              />

              : <AccountCircle/>
            }
              
            <Typography 
            variant='subtitle2' 
            color="secondary" 
            sx={{marginLeft: '6px'}}
            
            >
              {session.user.name}
            </Typography>
            </IconButton>
              )
            }
            

            <Menu
              anchorEl={anchorUserMenu}
              open={openUserMenu}
              onClose={() => setAnchorUserMenu(null)}
            >
             <Link href={'/user/dashbord'} passHref>
              <MenuItem>Meus Anúncios</MenuItem>
             </Link>
             <Link href={'/publish'} passHref>
              <MenuItem>Publicar novo anúncio</MenuItem>
             </Link>
              <Divider/>
              <MenuItem onClick={() => signOut({callbackUrl:'/'})}>Sair</MenuItem>
            </Menu>

          </Toolbar>
         </Container>
        </AppBar>
    </Box>
  );
}