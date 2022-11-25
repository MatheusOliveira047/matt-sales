import { 
  Container,
  Grid,
  Box
} from '@mui/material';

import theme from '../theme'

export default function Footer(){
  return(
    <Container 
      maxWidth="lg" 
      component={"footer"}
      sx={{
        borderTop: `1px solid black`,
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]:{
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
        }
      }}
    >
      <Grid 
        container 
        spacing={3} 
        >
        <Grid item xs={12} sm={12}>
          <Box textAlign={'center'}>
          Copyright © Matheus Oliveira Todos os direitos reservados.
          </Box>
        </Grid>
        
      </Grid>
    </Container>
  )
}