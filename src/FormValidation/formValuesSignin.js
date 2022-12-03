import * as yup from 'yup'

export const validationSchema = yup.object().shape({ 
  
  email: yup.string()
    .email('Digite um email valido')
    .required('Campo Obrigatório'),

  password: yup.string()
    .required('Campo Obrigatório')
    .min(6,'A senha deve conter pelo menos 6 caracteres'),



});

export const initialValues = {
  email:'',
  password:'',
}