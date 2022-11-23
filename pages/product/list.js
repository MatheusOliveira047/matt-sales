import { 
  Container,
  Typography,
  Paper,
  InputBase,
  IconButton,
  Grid,
  Box
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'

import CardProdutcs from '../../src/components/Card';
import theme from '../../src/theme';
import TempleteDefault from '../../src/templetes/Default'

export default function List(){
  return(
    <TempleteDefault>
      <Container maxWidth="lg" >
        <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12}>
          <Paper
          sx={{
            display:'flex',
            padding: theme.spacing(0,2),
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
        </Grid> 
        <Grid item xs={12} sm={12} md={12}>
          <Box 
            sx={{
              backgroundColor: theme.palette.background.white,
              padding: 2
            }}
          >
            <Typography component={'h6'} variant="h6">
            Anúncios
            </Typography>
            <Typography component={'span'} variant="subtitle">
            ENCONTRADO 200 ANÚNCIOS
            </Typography>
            <br /><br />
            <Grid container spacing={4}>
                <CardProdutcs
                  image={"https://source.unsplash.com/random?a=1"}
                  nameProdutc={'Produto 1'}
                  price={'60,00'}
                />
                <CardProdutcs
                  image={"https://source.unsplash.com/random?a=2"}
                  nameProdutc={'Produto 2'}
                  price={'60,00'}
                />
                <CardProdutcs
                  image={"https://source.unsplash.com/random?a=3"}
                  nameProdutc={'Produto 3'}
                  price={'60,00'}
                />
              
              </Grid>
            </Box>
          </Grid> 
        </Grid>
      </Container>
    </TempleteDefault>
  )
}