import { Formik } from 'formik';

import axios from 'axios'

import { useRouter } from 'next/router';

import { CircularProgress ,Grid,Container,Typography, FormControl, Input, InputLabel, FormHelperText,Box, Button } from '@mui/material'

import TempleteDefault from '../../../src/templetes/Default'

import {initialValues,validationSchema} from './formValues'

import useToasty from '../../../src/contexts/Toasty'

import { useStyles } from './styles';

export default function Signup(){
  const classes = useStyles()
  const router = useRouter()
  const {setToasty} = useToasty()

  const handleFormSubmit = async values =>{

    try {
      const response = await axios.post('/api/users', values)
      if(response.data.success){
        setToasty({
          open:true,
          text:"Usário cadastrado com sucesso!",
          severity: 'success'
        })
        return router.push('/auth/signin')
      }
    } catch (error) {
      setToasty({
        open:true,
        text:"Usário já existe!",
        severity: 'error'
      })
      console.log(error)
    }
  }


  return(
    <TempleteDefault>
      <Container maxWidth="md" className={classes.container}>
                <Typography component={'h1'} variant="h2" align='center' color='primary'>
                        Crie sua conta
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
            <FormControl fullWidth error={touched.passwordConf && errors.passwordConf ?  errors.passwordConf : null}>
            <InputLabel className={classes.labelInput}>
              Confirme sua Senha
            </InputLabel>
            <Input
              name='passwordConf'
              type='password'
              value={values.passwordConf}
              onChange={handleChange}
              />
            <FormHelperText>
              {touched.passwordConf && errors.passwordConf ?  errors.passwordConf : null}
            </FormHelperText>
            </FormControl>
            <br /><br />
            {
              isSubmitting 
              ? <CircularProgress className={classes.loading}/>
              : <Button type='submit' fullWidth variant='contained' color='primary'>Cadastrar</Button>
            }
            <Typography component={'span'} variant="body2" color='primary'>
              Já tem cadastro, Entre aqui
            </Typography>
 
           
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