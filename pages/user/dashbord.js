import {getSession} from 'next-auth/client'
import { useState } from 'react';
import axios from 'axios'
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
      <Container maxWidth="md"> 
        <Grid container spacing={4}>

         {
          products.map(product =>{
            if(removedProducts.includes(product._id)) return null

            return(
              <CardProdutcs
              key={product._id}
              image={`/uploads/${product.files[0].name}`}
              nameProdutc={product.title}
              price={formatCurrency(Number(product.price))}
              Actions={
                <CardActions>
                    <Button size='small' color='primary'>Editar</Button>
                    <Button size='small' onClick={()=>handleClickRemover(product._id)} color='primary'>Remover</Button>
                </CardActions>
              }
            />
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