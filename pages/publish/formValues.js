import * as yup from 'yup'

export const validationSchema = yup.object().shape({
  title: yup.string()
    .min(6, 'Escreva um título maior')
    .max(100,"Título muito grande")
    .required('Campo obrigatório'),

  category: yup.string().required('Campo Obrigatório'),
  
  description: yup.string()
    .min(50, 'Escreva uma descrição com pelo menos 50 caracteres')
    .required('Campo Obrigatório'),

  price: yup.number()
    .required('Campo Obrigatório'),
  
  name: yup.string()
    .required('Campo Obrigatório'),
  phone: yup.number()
    .required('Campo Obrigatório'),
  email: yup.string()
    .email('Digite um email valido')
    .required('Campo Obrigatório'),

  files: yup.array().min(1,'Envio pelo menos uma foto').required('Campo obrigatório')
});

export const initialValues = {
  title: '',
  category:'',
  description:'',
  price:'',
  name:'',
  phone:'',
  email:'',
  files: [],

}