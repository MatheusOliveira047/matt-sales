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

import CardProdutcs from '../../src/components/Card';



export default function Dashbord() {
  return (
    <TemplateDefault>
      <Container maxWidth="sm">
        <Typography component={'h1'} variant="h2" align='center'>
          Meus Anúncios
        </Typography>
        <Button 
          variant='contained' 
          color='primary' 
          sx={{
            margin:'30px auto',
            display:'block',
          }}
        >
          Publicar novo anúncio
        </Button>

      </Container>
      <Container maxWidth="md"> 
        <Grid container spacing={4}>

        <CardProdutcs
            image={"https://source.unsplash.com/random"}
            nameProdutc={'Produto x'}
            price={'60,00'}
            Actions={true}
          />
        <CardProdutcs
            image={"https://source.unsplash.com/random"}
            nameProdutc={'Produto x'}
            price={'60,00'}
            Actions={true}
          />
        <CardProdutcs
            image={"https://source.unsplash.com/random"}
            nameProdutc={'Produto x'}
            price={'60,00'}
            Actions={true}
          />
        <CardProdutcs
            image={"https://source.unsplash.com/random"}
            nameProdutc={'Produto x'}
            price={'60,00'}
            Actions={true}
          />
        <CardProdutcs
            image={"https://source.unsplash.com/random"}
            nameProdutc={'Produto x'}
            price={'60,00'}
            Actions={true}
          />
        <CardProdutcs
            image={"https://source.unsplash.com/random"}
            nameProdutc={'Produto x'}
            price={'60,00'}
            Actions={true}
          />
          
          
        </Grid>
      </Container>
    </TemplateDefault>
  );
}
