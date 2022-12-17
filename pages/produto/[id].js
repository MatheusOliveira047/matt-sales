import { Container, Grid, Box, Typography, Chip, Card, CardHeader,Button ,Avatar, CardMedia, Paper } from '@mui/material';
import Carousel from 'react-material-ui-carousel';


import TempleteDefault from '../../src/templetes/Default'
import theme from '../../src/theme';
import dbConnect from '../../src/utils/dbConnect'
import ProductsModel from '../../src/models/products'
import { formatCurrency } from '../../src/utils/currency';

import { useRouter } from 'next/router';

const Produtc = ({product})=>{
 

  return(
    <TempleteDefault>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Box
            sx={{
              backgroundColor: theme.palette.background.white,
              padding: theme.spacing(3),
              marginBottom: theme.spacing(3)
            }}
            >
              <Carousel
               autoPlay={false}
               animation="slide"
               navButtonsProps={{  
                style: {
                    color: theme.palette.background.white
                }
            }} 
              >
                {
                  product.files.map(file=> (
                    <Card 
                    sx={{
                      height:'100%'
                    }}
                    key={file.name}
                    >
                      <CardMedia
                        sx={{
                          paddingTop:'56%'
                        }}
                        image={`/uploads/${file.name}`}
                        title={product.title}
                      />
                    </Card>
                  ))
                }

              </Carousel>

            </Box>

            <Box
            sx={{
              backgroundColor: theme.palette.background.white,
              padding: theme.spacing(3),
              marginBottom: theme.spacing(3)
            }}
            >
               <Typography component="span"
               variant='caption' 
               > 
               Publicado {product.date}
               </Typography>

               <Typography 
                component={"h4"}
                variant="h4"
                sx={{
                  margin: "15px 0"
                }}
               >
               {product.title}
               </Typography>

               <Typography 
                component={"h4"}
                variant="h4"
                sx={{
                  fontWeight: 'bold',
                  marginBottom: '15px'
                }}
               >
                {formatCurrency(product.price)}
               </Typography>
               <Chip label={product.category}/>
            </Box>
            <Box
            sx={{
              backgroundColor: theme.palette.background.white,
              padding: theme.spacing(3),
              marginBottom: theme.spacing(3)
            }}
            >
               <Typography component="h5"
               variant='h5' 
               > 
               Descrição
               </Typography>

               <Typography 
                component={"p"}
                variant="body2"
               >
               {product.description}
               </Typography>

               
            </Box>
          </Grid>

          <Grid item xs={4}>
             <Card
             elevation={0}
             sx={{
              backgroundColor: theme.palette.background.white,
              padding: theme.spacing(3),
              marginBottom: theme.spacing(3)
            }}
             >
              <CardHeader 
                avatar={
                  <Avatar src={product.user.image}>
                    { product.user.image === null
                      ? product.user.name[0]
                      : product.user.image 
                      
                      }
                  </Avatar>
                }
                title={product.user.name}
                subheader={product.user.phone}
              />
              <CardMedia 
                image={product.user.image}
                title={product.user.name}
              />

              
             </Card>

             <Box
             sx={{
              backgroundColor: theme.palette.background.white,
              padding: theme.spacing(3),
              marginBottom: theme.spacing(3)
            }}
             >
              <Typography component="h5"
               variant='h5' 
               > 
               {product.location.city} - {product.location.uf[0]}{product.location.uf[1]}
               </Typography>
             </Box>

          </Grid>
        </Grid>
      </Container>
    </TempleteDefault>
  )
}

export async function getStaticPaths(){
  await dbConnect()

  const products = await ProductsModel.find()

  const paths = products.map(product=>{
    return {
      params: {
        id:product._id.toString(),
      }
    }
  })

  return { 
    paths,
    fallback: false,
  }
}


export async function getStaticProps(context){
  
  const {id} = context.params

  
  await dbConnect()
  
  console.log(context.params)
  const product = await ProductsModel.findOne({_id: id})

  return {
    props:{
      product: JSON.parse(JSON.stringify(product))
    },
    revalidate:10
  }
}


export default Produtc