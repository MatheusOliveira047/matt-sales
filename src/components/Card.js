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
                    {price}
                  </Typography>
                </CardContent>
                {Actions}
              </Card>
      
  )
}