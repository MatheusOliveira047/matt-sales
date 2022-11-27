import * as yup from 'yup'

export const validationSchema = yup.object().shape({ 
  name: yup.string()
    .required('Campo Obrigatório'),
  
  email: yup.string()
    .email('Digite um email valido')
    .required('Campo Obrigatório'),

  password: yup.string()
    .required('Campo Obrigatório')
    .min(6,'A senha deve conter pelo menos 6 caracteres'),

  passwordConf: yup.string()
    .required('Campo Obrigatório')
    .oneOf([yup.ref('password'),null], 'As senhas precisam ser iguais'),

});

export const initialValues = {
  
  name:'',
  email:'',
  password:'',
  passwordConf:'',

}