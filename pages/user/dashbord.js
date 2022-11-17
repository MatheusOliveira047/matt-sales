import TemplateDefault from '../../src/templetes/Default'
import { 
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from '@mui/material';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme)=> ({
  container:{
    padding: theme.spacing(8,0,6),
    },
  button:{
    margin:'30px auto',
    display:'block',
  },
  cards:{
    margin:5
  },
  cardMedia:{
    paddingTop: '56%',
  }
}))

export default function Home() {
  const classes = useStyles()
  return (
    <TemplateDefault>
      <Container className={classes.container} maxWidth="sm">
        <Typography component={'h1'} variant="h2" align='center'>
          Meus Anúncios
        </Typography>
        <Button variant='contained' color='primary' className={classes.button}>
          Publicar novo anúncio
        </Button>

      </Container>
      <Container maxWidth="md"> 
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
                <CardActions>
                  <Button size='small' color='primary'>Editar</Button>
                  <Button size='small' color='primary'>Remover</Button>
                </CardActions>
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
                <CardActions>
                  <Button size='small' color='primary'>Editar</Button>
                  <Button size='small' color='primary'>Remover</Button>
                </CardActions>
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
                <CardActions>
                  <Button size='small' color='primary'>Editar</Button>
                  <Button size='small' color='primary'>Remover</Button>
                </CardActions>
              </Card>
          </Grid>
        </Grid>
      </Container>
    </TemplateDefault>
  );
}
