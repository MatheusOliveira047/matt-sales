import {
  Container,
  Typography,
  InputBase,
  IconButton,
  Paper,
  Grid,
} from '@mui/material'

import CardProdutcs from '../src/components/Card'

import theme from '../src/theme'

import SearchIcon from '@mui/icons-material/Search'
import TempleteDefault from '../src/templetes/Default'



const Home = ()=>{
  return(
    <TempleteDefault>
      <Container maxWidth="md" >
        <Typography component={'h1'} variant="h3" align='center'>
         O que deseja encontrar ?
        </Typography>

        <Paper
        sx={{
          display:'flex',
          padding: theme.spacing(1),
          marginTop:'15px',
          borderRadius: '8px'
        }}
        >
        <InputBase
        fullWidth
        placeholder="Ex... Iphone XS com garantia"
      />
      <IconButton type="button" sx={{ p: '10px' }}>
        <SearchIcon />
      </IconButton>
        </Paper>

      </Container>
      <Container maxWidth="lg" 
        sx={{
          paddingTop: theme.spacing(6)
        }}
      >
      <Typography component={'h2'} variant="h4" align='center'>
         Destaques
        </Typography>
      <Grid container spacing={4}>
          
          <CardProdutcs
            image={"https://source.unsplash.com/random"}
            nameProdutc={'Produto x'}
            price={'60,00'}
          />
          <CardProdutcs
            image={"https://source.unsplash.com/random"}
            nameProdutc={'Produto x'}
            price={'60,00'}
          />
          <CardProdutcs
            image={"https://source.unsplash.com/random"}
            nameProdutc={'Produto x'}
            price={'60,00'}
          />
         
        </Grid>
      </Container>
    </TempleteDefault>
  )

}

export default Home