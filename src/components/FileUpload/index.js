import { useDropzone } from 'react-dropzone';
import { useStyles } from './styles';

import {
  Box,
  Typography,
  IconButton
} from '@mui/material'
import { DeleteForever } from '@mui/icons-material';


export default function FileUpload({files,setFieldValue,touched,errors}){
  const classes = useStyles() 
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFile) =>{
      const newFiles = acceptedFile.map(file=>{
        return Object.assign(file,{
          preview:URL.createObjectURL(file)
        })
      })

      setFieldValue('files',[
        ...files,
        ...newFiles
      ])
    }
  })



  const handleRemoveFile = (fileName)=>{
    console.log(fileName)
    const newFilesState = files.filter(file => file.name !== fileName)
    setFieldValue('files',newFilesState)
  }
  return(
    <>
    <Typography component={'h6'} variant="h6" sx={{ marginBottom:'5px' }} color={errors && touched ? 'error' : "textPrimary"}>
       Imagens
    </Typography>
    <Typography component={'div'} variant="body2" sx={{ marginBottom:'5px' }} color={errors && touched ? 'error' : "textPrimary"}>
       A primeira imagem é a foto principal do seu anúncio.
    </Typography>
    {
      errors 
      ? <Typography variant='body2' color="error" gutterBottom>
        { touched && errors ? errors : null }
      </Typography>
      : null
    }
      
    <Box className={classes.boxDropzone} >
      <Box
      {...getRootProps()}
      
        sx={{ border:`2px dashed ${errors && touched ? 'red' : 'black'}`,}}
        className={classes.dropzone}
        >
        <input name="files" {...getInputProps()}/>

        <Typography variant='body2'>
          Clique para adicionar ou arraste a ímagem para aqui
        </Typography>

      </Box>
      {files.map((file,index) =>(
        <Box
        key={file}
        sx={{ backgroundImage: `url(${file.preview})`,}}
        className={classes.thumb}
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
  
    </>
  )
}