import {
  Container,
  Typography,
  InputBase,
  IconButton,
  Paper,
  Grid,
  CardContent,
  CardMedia,
  Card
  
} from '@mui/material'

import theme from '../src/theme'

import SearchIcon from '@mui/icons-material/Search'
import TempleteDefault from '../src/templetes/Default'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme)=>({
  container:{
    padding: theme.spacing(8,0,0)
  },
  boxSearch:{
    
    display:'flex',
    padding: theme.spacing(0, 2),
    marginTop:'20px',
    borderRadius: '10px'
  },
}))

const Home = ()=>{
  const classes = useStyles()
  return(
    <TempleteDefault>
      <Container maxWidth="md" className={classes.container}>
        <Typography component={'h1'} variant="h3" align='center'>
         O que deseja encontrar ?
        </Typography>
        <Paper className={classes.boxSearch}>
        <InputBase
        fullWidth
        placeholder="Ex... Iphone XS com garantia"
      />
      <IconButton type="button" sx={{ p: '10px' }}>
        <SearchIcon />
      </IconButton>
        </Paper>

      </Container>
      <Container maxWidth="md" className={classes.container}>
      <Typography component={'h2'} variant="h4" align='center'>
         Destaques
        </Typography>
      <Grid container spacing={4}>
          
          <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  image={'https://source.unsplash.com/random'}
                  alt="green iguana"
                 />
                <CardContent>
                  <Typography variant='h5' component={'h2'}>
                    Produto x
                  </Typography>
                  <Typography>
                    R$ 60,00
                  </Typography>
                </CardContent>
              </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  image={'https://source.unsplash.com/random'}
                  alt="green iguana"
                 />
                <CardContent>
                  <Typography variant='h5' component={'h2'}>
                    Produto x
                  </Typography>
                  <Typography>
                    R$ 60,00
                  </Typography>
                </CardContent>
              </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  image={'https://source.unsplash.com/random'}
                  alt="green iguana"
                 />
                <CardContent>
                  <Typography variant='h5' component={'h2'}>
                    Produto x
                  </Typography>
                  <Typography>
                    R$ 60,00
                  </Typography>
                </CardContent>
              </Card>
          </Grid>
        </Grid>
      </Container>
    </TempleteDefault>
  )

}

export default Home