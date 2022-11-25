import { useState } from 'react'
import { Formik } from 'formik';

import { 
  Container,
  Typography,
  Box,
  Select,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  InputAdornment,
  MenuItem,
  Input
} from '@mui/material'

import {initialValues,validationSchema} from './formValues'
import TemplateDefault from '../../src/templetes/Default'
import FileUpload from '../../src/components/FileUpload';

import {useStyles} from './styles'


export default function Publish(){
  const classes = useStyles()

  return(
    <TemplateDefault>
      <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values)=>{
        console.log('ok enviou o form',values)
      }}
      >
      {
        ({
          touched,
          values,
          errors,
          handleChange,
          handleSubmit,
          setFieldValue,
        })=>{

         

          return(
            <form onSubmit={handleSubmit}>
              <Container maxWidth="sm" className={classes.container}>
                <Typography component={'h1'} variant="h2" align='center' color='primary'>
                    Publicar Anúncio!
                </Typography>
                <Typography component={'h5'} variant="h5" align='center' color='primary'>
                    Quanto mais detalhado, melhor!
                </Typography>
              </Container>

              <Container maxWidth="md" className={classes.container}>

                <Box className={classes.box}>
                <FormControl  fullWidth error={touched.title && errors.title ?  errors.title : null}>
                  <InputLabel className={classes.labelInput}>
                  Titulo do Anúncio
                  </InputLabel>
                  <Input
                    name='title'
                    value={values.title}
                    onChange={handleChange}
                    />
                   
                <FormHelperText>
                      {touched.title && errors.title ?  errors.title : null}
                    </FormHelperText>
                </FormControl>
                <br /><br />
                <FormControl fullWidth error={touched.category && errors.category ?  errors.category : null}>
                  <InputLabel id='categoryLabel' className={classes.labelInput}>Categoria</InputLabel>
                  <Select
                    name='category'
                    value={values.category}
                    onChange={handleChange}
                    fullWidth
                    labelId='categoryLabel'
                    id='category'
                    label="Categoria"
                    variant='outlined'
                    >
                  
                  <MenuItem value={"Bebê e criança"}>Bebê e criança</MenuItem>
                  <MenuItem value={"Agricultura"}>Agricultura</MenuItem>
                  <MenuItem value={"Moda"}>Moda</MenuItem>
                  <MenuItem value={"Carros, Motos e Barcos"}>Carros, Motos e Barcos</MenuItem>
                  <MenuItem value={"Serviços"}>Serviços</MenuItem>
                  <MenuItem value={"Lazer"}>Lazer</MenuItem>
                  <MenuItem value={"Animais"}>Animais</MenuItem>
                  <MenuItem value={"Moveis, Casa e Jardim"}>Moveis, Casa e Jardim</MenuItem>
                  <MenuItem value={"Imóveis"}>Imóveis</MenuItem>
                  <MenuItem value={"Equipamentos e ferramentas"}>Equipamentos e ferramentas</MenuItem>
                  <MenuItem value={"Celulares e tablets"}>Celulares e tablets</MenuItem>
                  <MenuItem value={"Esporte"}>Esporte</MenuItem>
                  <MenuItem value={"Tecnologia"}>Tecnologia</MenuItem>
                  <MenuItem value={"Emprego"}>Emprego</MenuItem>
                  <MenuItem value={"Outros"}>Outros</MenuItem>
                  </Select>
                  <FormHelperText>
                    {touched.category && errors.category ?  errors.category : null}
                  </FormHelperText>
                </FormControl>

                </Box>
              </Container>

      <Container maxWidth="md" className={classes.container}>
        <Box className={classes.box}>
          <FileUpload
            setFieldValue={setFieldValue}
            files={values.files}
            touched={touched.files}
            errors={errors.files}
            />
        </Box>
      </Container>

      <Container maxWidth="md" className={classes.container}>
        <Box className={classes.box}>
        <FormControl fullWidth error={touched.description && errors.description ?  errors.description : null}>
        <InputLabel className={classes.labelInput}> Escreve os detalhes do que está vendendo</InputLabel>
        <Input
          name='description'
          value={values.description}
          onChange={handleChange}
          multiline
          rows={6}
          />
        <FormHelperText>
          {touched.description && errors.description ?  errors.description : null}
        </FormHelperText>
        </FormControl>
        </Box>
      </Container>

      <Container maxWidth="md" className={classes.container}>
        <Box className={classes.box}> 
        
        <FormControl fullWidth error={touched.price && errors.price ?  errors.price : null}>
        <InputLabel className={classes.labelInput}>Preço</InputLabel>
        <Input
          name='price'
          type='number'
          value={values.price}
          onChange={handleChange}
          startAdornment={<InputAdornment position='start'>R$</InputAdornment>}
          />
        <FormHelperText>
          {touched.price && errors.price ?  errors.price : null}
        </FormHelperText>
        </FormControl>          
        </Box>
      </Container>

      <Container maxWidth="md" className={classes.container}>
        <Box className={classes.box}>
        <Typography gutterBottom component={'h6'} variant="h6" sx={{ marginBottom:'5px' }} color='primary'>
          Dados de contato
        </Typography>

        <FormControl fullWidth error={touched.name && errors.name ?  errors.name : null}>
        <InputLabel className={classes.labelInput}>
          Nome
        </InputLabel>
        <Input
          name='name'
          value={values.name}
          onChange={handleChange}
          />
        <FormHelperText>
          {touched.name && errors.name ?  errors.name : null}
        </FormHelperText>
        </FormControl>   

        <br /><br />
        <FormControl fullWidth error={touched.phone && errors.phone ?  errors.phone : null}>
        <InputLabel className={classes.labelInput}>
          Telefone
        </InputLabel>
        <Input
          name='phone'
          value={values.phone}
          onChange={handleChange}
          />
        <FormHelperText>
          {touched.phone && errors.phone ?  errors.phone : null}
        </FormHelperText>
        </FormControl>  
        <br /><br />

        <FormControl fullWidth error={touched.email && errors.email ?  errors.email : null}>
        <InputLabel className={classes.labelInput}>
          E-mail
        </InputLabel>
        <Input
          name='email'
          value={values.email}
          onChange={handleChange}
          />
        <FormHelperText>
          {touched.email && errors.email ?  errors.email : null}
        </FormHelperText>
        </FormControl>  
       
        </Box>
      </Container>

      <Container maxWidth="md" className={classes.container}>
        <Box textAlign={'right'}>
          <Button type='submit' variant='contained' color='primary'>Publicar anúncio</Button>
        </Box>
      </Container>
      </form>

          )
        }
      }

      </Formik>

      

    </TemplateDefault>
  )
}