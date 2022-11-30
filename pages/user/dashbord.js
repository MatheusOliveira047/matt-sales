import {getSession} from 'next-auth/client'

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
import TemplateDefault from '../../src/templetes/Default'
import ProductsModel from '../../src/models/products'
import dbConnect from '../../src/utils/dbConnect'

const Dashbord = ({products})=> {
  console.log(products)
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

         {
          products.map(product =>{
            return(
              <CardProdutcs
              key={product._id}
              image={`/uploads/${product.files[0].name}`}
              nameProdutc={product.title}
              price={product.price}
              Actions={true}
            />
            )
          })
         } 

       
          
        
          
          
        </Grid>
      </Container>
    </TemplateDefault>
  );
}

Dashbord.requireAuth = true

export async function getServerSideProps({req}){
  const session = await getSession({req})
  await dbConnect()
  const Products =  await ProductsModel.find({'user.id': session.userId})
  const products = JSON.parse(JSON.stringify(Products))

  return {
    props:{
      products
    }
  }
}

export default Dashbord