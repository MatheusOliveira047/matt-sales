import Link from 'next/link';
import slugify from 'slugify';

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
import ProductsModel from '../../src/models/products'
import dbConnect from '../../src/utils/dbConnect'
import { formatCurrency } from '../../src/utils/currency';

const List = ({products,q})=>{
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
           { products.length === 1 
            ? `Encontrado 1 anúncio para o termo "${q}"`
            : `Encontrado ${products.length} anúncios para o termo "${q}"`
            }
            </Typography>
            <br /><br />
            <Grid container spacing={3}>

            {
              products.map(product=>{
                const category = slugify(product.category).toLowerCase()
                const title = slugify(product.title).toLowerCase()
                
                return(
                <Grid item xs={12} sm={6} md={4}>
                <Link href={`/${category}/${title}/${product._id}`} passHref>
                    <CardProdutcs
                      key={product._id}
                      image={`/uploads/${product.files[0].name}`}
                      nameProdutc={product.title}
                      price={formatCurrency(product.price)}
                    />  
                </Link>
                </Grid>
                )
              })
            }
            </Grid>
            </Box>
          </Grid> 
        </Grid>
      </Container>
    </TempleteDefault>
  )
}

export async function getStaticProps({query}){
 try {
  const { q } = query

  await dbConnect()

  const products = await ProductsModel.find({
    $or: [
      { 
        title: { 
          $regex: q,
          $options: 'i' 
        } 
      },
      { 
        description: { 
          $regex: q,
          $options: 'i' 
        } 
      },
    ]
  })

  return {
    props:{
      products: JSON.parse(JSON.stringify(products)),
      q
    }
  }
 } catch (error) {
  console.log(error)
 }
}

export default List