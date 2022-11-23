import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button
} from "@mui/material"

export default function CardProdutcs({image,nameProdutc,price,Actions}){
  return(
    <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  sx={{
                    height:'200px'
                  }}
                  component="img"
                  image={image}
                  alt="produtos"
                 />
                <CardContent>
                  <Typography variant='h5' component={'h2'}>
                    {nameProdutc}
                  </Typography>
                  <Typography>
                    R$ {price}
                  </Typography>
                </CardContent>
                {Actions && 
                  <CardActions>
                    <Button size='small' color='primary'>Editar</Button>
                    <Button size='small' color='primary'>Remover</Button>
                  </CardActions>
                }
              </Card>
          </Grid>
  )
}