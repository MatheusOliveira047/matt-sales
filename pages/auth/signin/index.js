import { Formik } from 'formik';

import axios from 'axios'

import { useRouter } from 'next/router';

import { CircularProgress ,Grid,Container,Typography, FormControl, Input, InputLabel, FormHelperText,Box, Button } from '@mui/material'

import TempleteDefault from '../../../src/templetes/Default'

import {initialValues,validationSchema} from './formValues'

import useToasty from '../../../src/contexts/Toasty'

import { useStyles } from './styles';

export default function Signin(){
  const classes = useStyles()
  const router = useRouter()
  const {setToasty} = useToasty()

  const handleFormSubmit = async values =>{}


  return(
    <TempleteDefault>
      <Container maxWidth="md" className={classes.container}>
                <Typography component={'h1'} variant="h2" align='center' color='primary'>
                        Faça Login
                </Typography>
                <Typography component={'h5'} variant="h5" align='center' color='primary'>
                        E anuncie para todo o Brasil
                </Typography>
      </Container>


      <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
      >
      {
        ({
          touched,
          values,
          errors,
          handleChange,
          handleSubmit,
          isSubmitting
        })=>{
          return(
            <form onSubmit={handleSubmit} action="/api/users" method='post'>
            <Container maxWidth="md">


            <Box className={classes.box}>
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
            <br /><br />
            <FormControl fullWidth error={touched.password && errors.password ?  errors.password : null}>
            <InputLabel className={classes.labelInput}>
              Senha
            </InputLabel>
            <Input
              name='password'
              type='password'
              value={values.password}
              onChange={handleChange}
              />
            <FormHelperText>
              {touched.password && errors.password ?  errors.password : null}
            </FormHelperText>
            </FormControl>
            <br /><br />
           
            {
              isSubmitting 
              ? <CircularProgress className={classes.loading}/>
              : <Button type='submit' fullWidth variant='contained' color='primary'>Login</Button>
            }
           
            </Box>
          </Container>
          </form>
          )
        }
      }
        </Formik>
    </TempleteDefault>
  )
}