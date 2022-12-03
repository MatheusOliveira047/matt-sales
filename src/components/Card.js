import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button
} from "@mui/material"
import Link from 'next/link'

export default function CardProdutcs({image,nameProdutc,price,Actions,link}){
  return(
   
              <Card>
                {
                  link 
                  ?(<Link href={link} passHref>
                  <CardMedia
                    sx={{
                      height:'200px'
                    }}
                    component="img"
                    image={image}
                    alt="produtos"
                   />
                    </Link>)
                  :
                  (<CardMedia
                    sx={{
                      height:'200px'
                    }}
                    component="img"
                    image={image}
                    alt="produtos"
                   />)
                  
                }
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