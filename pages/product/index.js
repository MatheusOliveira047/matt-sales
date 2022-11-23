import { Container, Grid, Box, Typography, Chip, Card, CardHeader,Button ,Avatar, CardMedia, Paper } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

import TempleteDefault from '../../src/templetes/Default'
import theme from '../../src/theme';



export default function Produtcs(){
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

              <Card 
              sx={{
                height:'100%'
              }}
              >
                <CardMedia
                  sx={{
                    paddingTop:'56%'
                  }}
                  image="https://source.unsplash.com/random?a=2"
                  title="titulo"
                />
              </Card>
              <Card 
              sx={{
                height:'100%'
              }}
              >
                <CardMedia
                  sx={{
                    paddingTop:'56%'
                  }}
                  image="https://source.unsplash.com/random?a=1"
                  title="titulo"
                />
              </Card>
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
               Publicado 16 junho de 2021
               </Typography>

               <Typography 
                component={"h4"}
                variant="h4"
                sx={{
                  margin: "15px 0"
                }}
               >
                Jaguar XE 2.0 D R-Sport Aut.
               </Typography>

               <Typography 
                component={"h4"}
                variant="h4"
                sx={{
                  fontWeight: 'bold',
                  marginBottom: '15px'
                }}
               >
                50.000,00
               </Typography>
               <Chip label="categoria"/>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptates aspernatur rerum repellendus voluptatum! Porro, amet delectus! At corporis quod nesciunt vero quasi maiores hic totam quaerat quae rerum! Qui? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam exercitationem veritatis molestiae, blanditiis aliquid architecto magnam voluptatibus sit nisi harum sunt est consequatur enim incidunt repellendus possimus pariatur, numquam perferendis.
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
                  <Avatar>M</Avatar>
                }
                title="Matheus Oliveira"
                subheader="ludsonmatheus@gmail.com"
              />
              <CardMedia 
                image={"https://source.unsplash.com/random"}
                title="Matheus Oliveira"
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
               Localização
               </Typography>
             </Box>

          </Grid>
        </Grid>
      </Container>
    </TempleteDefault>
  )
}