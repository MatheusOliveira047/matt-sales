import {getSession} from 'next-auth/client'
import { useState } from 'react';
import axios from 'axios'
import slugify from 'slugify';
import Link from 'next/link';
import { 
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';

import CardProdutcs from '../../src/components/Card';
import TemplateDefault from '../../src/templetes/Default'
import ProductsModel from '../../src/models/products'
import dbConnect from '../../src/utils/dbConnect'
import {formatCurrency} from '../../src/utils/currency'
import useToasty from '../../src/contexts/Toasty'

const Dashbord = ({products})=> {
  const {setToasty} = useToasty()
  const [openConfirmModal,setOpenConfirmModal] = useState(false)
  const [productId,setProductId]= useState()
  const [removedProducts,setRemovedProducts] = useState([])

  const handleCloseModal = ()=>{
    return setOpenConfirmModal(false)
  }

  const handleClickRemover = (productId)=>{
    setProductId(productId)
    setOpenConfirmModal(true)

  }
  const handleConfirmAnuncio = ()=>{
    axios.delete('/api/products/delete',{
      data:{
        id:productId
      }
    })
    .then(handleSuccess)
    .catch(handleError)
  }
  const handleSuccess = ()=>{
    setOpenConfirmModal(false)

    setRemovedProducts([...removedProducts, productId])
    
    setToasty({
      open:true,
      severity:'success',
      text:'Anúncio Removido com sucesso!'
    })
    
  }
  const handleError = ()=>{
    setOpenConfirmModal(false)
    setToasty({
      open:true,
      severity:'error',
      text:'Ops, Ocorreu um erro!'
    })
  }
  
  return (
    <TemplateDefault>



      <Container maxWidth="sm">
        <Typography component={'h1'} variant="h2" align='center'>
          Meus Anúncios
        </Typography>
        <Link href={'/publish'} passHref>
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
        </Link>

      </Container>
      <Container maxWidth="lg"> 
         {
            products.length === 0 &&
            <Typography gutterBottom component="div" variant='body1' align="center" color="textPrimary">
              Nenhum Anúncio Publicado
            </Typography>
          }

        <Grid container spacing={4}>
        {
              products.map(product=>{
                const category = slugify(product.category).toLowerCase()
                const title = slugify(product.title).toLowerCase()
                
                return(
                <Grid item xs={12} sm={6} md={4}>
                
                    <CardProdutcs
                      key={product._id}
                      image={`/uploads/${product.files[0].name}`}
                      nameProdutc={product.title}
                      price={formatCurrency(product.price)}
                      link={`/${category}/${title}/${product._id}`}
                      Actions={
                        <CardActions>
                            <Button size='small' color='primary'>Editar</Button>
                            <Button size='small' onClick={()=>handleClickRemover(product._id)} color='primary'>Remover</Button>
                        </CardActions>
                      }
                    />  
                </Grid>
                )
              })
            }
       
        </Grid>
        
        <Dialog
        open={openConfirmModal}
        onClose={handleCloseModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
        <DialogTitle id="alert-dialog-title">
          Deseja Realmente Excluir esse Anúncio? 
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Ao confirmar a operação, não poderá ser desfeita.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Cancelar</Button>

          <Button onClick={handleConfirmAnuncio} autoFocus>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>

      </Container>
    </TemplateDefault>
  );
}

Dashbord.requireAuth = true


export async function getServerSideProps({req,res}){
  const session = await getSession({req})
  await dbConnect()
  
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
    )
    
    const Products =  await ProductsModel.find({'user.id': session.userId})
    const products = JSON.parse(JSON.stringify(Products))

    return {
      props:{
        products
      }
    }
  }
  

export default Dashbord