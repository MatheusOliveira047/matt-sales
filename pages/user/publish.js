import { useState } from 'react'
import { Formik } from 'formik';
import * as yup from 'yup'

import { 
  Container,
  Typography,
  Box,
  TextField,
  Select,
  Button,
  IconButton,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  MenuItem
} from '@mui/material'

import { useDropzone } from 'react-dropzone';

import { DeleteForever } from '@mui/icons-material';



import TemplateDefault from '../../src/templetes/Default'
import theme from '../../src/theme';

const validationSchema = yup.object().shape({
  title: yup.string()
    .min(6, 'Escreva um título maior')
    .max(100,"Título muito grande")
    .required('Campo obrigatório'),

  category: yup.string().required('Campo Obrigatório')  
});

export default function Publish(){
  const [files,setFiles] = useState([])


  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFile) =>{
      const newFiles = acceptedFile.map(file=>{
        return Object.assign(file,{
          preview:URL.createObjectURL(file)
        })
      })


      setFiles([
        ...files,
        ...newFiles
      ])
    }
  })

  const handleRemoveFile = (fileName)=>{
    const newFilesState = files.filter(file => file.name !== fileName)
    setFiles(newFilesState)
  }


  return(
    <TemplateDefault>
      <Formik
      initialValues={{
        title: '',
        category:'',
      }}
      validationSchema={validationSchema}
      onSubmit={(values)=>{
        console.log('ok enviou o form',values)
      }}
      >
      {
        ({
          values,
          errors,
          handleChange,
          handleSubmit
        })=>{
          console.log(errors)
          return(
            <form onSubmit={handleSubmit}>
              <Container maxWidth="sm" sx={{ paddingBottom: theme.spacing(3) }}>
                <Typography component={'h1'} variant="h2" align='center' color='primary'>
                    Publicar Anúncio!
                </Typography>
                <Typography component={'h5'} variant="h5" align='center' color='primary'>
                    Quanto mais detalhado, melhor!
                </Typography>
              </Container>

              <Container maxWidth="md" sx={{ paddingBottom: theme.spacing(3) }}>

                <Box sx={{ bgcolor: theme.palette.background.white, padding: '10px' }}>
                <Typography component={'h6'} variant="h6" sx={{ marginBottom:'5px' }} color='primary'>
                    Titulo do Anúncio
                </Typography>
                <TextField
                  name='title'
                  value={values.title}
                  onChange={handleChange}
                  label="ex.: Notebook Lenovo S145 I5"
                  size='small'
                  fullWidth
                  error={errors.title}
                  helperText={errors.title}
                />
                <br /><br />
                <Typography component={'h6'} variant="h6" sx={{ marginBottom:'5px' }} color='primary'>
                    Categoria
                </Typography>

                <FormControl fullWidth error={errors.category}>
                  <Select
                    name='category'
                    value={values.category}
                    onChange={handleChange}
                    fullWidth
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
                    {errors.category}
                  </FormHelperText>
                </FormControl>

                </Box>
              </Container>

      <Container maxWidth="md" sx={{ paddingBottom: theme.spacing(3) }}>
        <Box sx={{ bgcolor: theme.palette.background.white, padding: '10px' }}>
        <Typography component={'h6'} variant="h6" sx={{ marginBottom:'5px' }} color='primary'>
           Imagens
        </Typography>
        <Typography component={'div'} variant="body2" sx={{ marginBottom:'5px' }} color='primary'>
           A primeira imagem é a foto principal do seu anúncio.
        </Typography>
        <Box 
          sx={{
            display:'flex',
            flexWrap:'wrap',
          }}
        >
          <Box
          {...getRootProps()}

            sx={{
              width:200, 
              height:150, 
              backgroundColor: theme.palette.background.default,
              border:'2px dashed black',
              display:'flex',
              justifyContent:"center",
              alignItems:'center',
              textAlign:'center',
              padding:5,
              margin: '0 5px 10px 0'
            }}
          >
            <input {...getInputProps()}/>

            <Typography variant='body2'>
              Clique para adicionar ou arraste a ímagem para aqui
            </Typography>
          </Box>
          {files.map((file,index) =>(
             <Box
             key={file}
             sx={{
               width:200,
               height:150,
               margin: '0 5px 10px 0',
               position:'relative',
               backgroundSize:'cover',
               backgroundPosition:'center center',
               backgroundImage: `url(${file.preview})`,
               '&:hover .boxPhoto':{
                 display:'flex',
               },
               '& .boxPhoto':{
                 backgroundColor:'rgba(0,0,0,0.7)',
                 height:'100%',
                 width:'100%',
                 display:'none',
                 justifyContent:'center',
                 alignItems:'center',
                 textAlign:'center',
               },
               '& .textPri':{
                 position:'absolute',
                 bottom:0,
                 left:0,
                 backgroundColor:'blue',
                 padding:"6px 10px",
                 borderRadius: '0 6px 0 0'
               }
             }}
           >
            {
              index === 0 
              ? <Box className='textPri' >
                  <Typography variant='body2' color='secondary'>
                    Principal
                  </Typography>
                </Box>
             : ''
            }
           
             <Box className='boxPhoto'>
               <IconButton onClick={()=>handleRemoveFile(file.name)} color="secondary">
                 <DeleteForever fontSize='large'/>
               </IconButton>
             </Box>
           </Box>
            ))
          }
         


        </Box>
        </Box>
      </Container>

      <Container maxWidth="md" sx={{ paddingBottom: theme.spacing(3) }}>
        <Box sx={{ bgcolor: theme.palette.background.white, padding: '10px' }}>
        <Typography component={'h6'} variant="h6" sx={{ marginBottom:'5px' }} color='primary'>
           Descrição
        </Typography>
        <Typography component={'div'} variant="body2" sx={{ marginBottom:'5px' }} color='primary'>
          Escreve os detalhes do que está vendendo
        </Typography>
        <TextField
          multiline
          rows={6}
          fullWidth
        />
        </Box>
      </Container>

      <Container maxWidth="md" sx={{ paddingBottom: theme.spacing(3) }}>
        <Box sx={{ bgcolor: theme.palette.background.white, padding: '10px' }}> 
        <Typography component={'h6'} variant="h6" sx={{ marginBottom:'5px' }} color='primary'>
           Preço
        </Typography>
          <br />
          <FormControl
          fullWidth
          variant='outlined'
          >
            <InputLabel>Valor</InputLabel>
            <OutlinedInput 
              onChange={()=>{}} 
              startAdornment={<InputAdornment position='start'>R$</InputAdornment>}
              labelWidth={40} 
            />
          </FormControl>
        </Box>
      </Container>

      <Container maxWidth="md" sx={{ paddingBottom: theme.spacing(3) }}>
        <Box sx={{ bgcolor: theme.palette.background.white, padding: '10px' }}>
        <Typography gutterBottom component={'h6'} variant="h6" sx={{ marginBottom:'5px' }} color='primary'>
          Dados de contato
        </Typography>

        <TextField
          label="Nome"
          size='small'
          fullWidth
        />
        <br /><br />
        <TextField
          label="E-mail"
          size='small'
          fullWidth
        />
        <br /><br />
        <TextField
          label="Telefone"
          size='small'
          fullWidth
        />
        </Box>
      </Container>

      <Container maxWidth="md" sx={{ paddingBottom: theme.spacing(3) }}>
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