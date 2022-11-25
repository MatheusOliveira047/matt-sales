import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme)=>({
  boxDropzone:{
    display:'flex',
    flexWrap:'wrap',
  },
  dropzone:{
    width:200, 
    height:150, 
    backgroundColor: theme.palette.background.default,
    display:'flex',
    justifyContent:"center",
    alignItems:'center',
    textAlign:'center',
    padding:5,
    margin: '0 5px 10px 0'
  },
  thumb:{
    width:200,
    height:150,
    margin: '0 5px 10px 0',
    position:'relative',
    backgroundSize:'cover',
    backgroundPosition:'center center',
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
  }
}))