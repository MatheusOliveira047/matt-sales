import Link from 'next/link'
import slugify from 'slugify'
import { useState } from 'react'
import { useRouter } from 'next/router'
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
import dbConnect from '../src/utils/dbConnect'
import ProductsModel from '../src/models/products'
import { formatCurrency } from '../src/utils/currency'



const Home = ({products})=>{
  const [search, setSearch] = useState()
  const router = useRouter()

  const handleSearch = ()=>{
   return router.push(`/search/${search}`)
  }

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
        onChange={(e)=> setSearch(e.target.value)}
      />
      <IconButton onClick={handleSearch} type="button" sx={{ p: '10px' }}>
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
        <br /><br />
      <Grid container spacing={4}>
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
      </Container>
    </TempleteDefault>
  )

}

export async function getStaticProps(){
 
  try {
    await dbConnect()
    const products = await ProductsModel.aggregate([{
    $sample: {size : 6},
  }])

  return{
    props:{
      products: JSON.parse(JSON.stringify(products))
    }
  }
  } catch (error) {
    console.log(error)
  }
}


export default Home