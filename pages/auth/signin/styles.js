import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme)=>({
  container:{
    paddingBottom: theme.spacing(3)
  },
  box:{
    backgroundColor:theme.palette.background.white,
    padding: theme.spacing(3),

  },
  labelInput:{
    fontWeight: 400, 
    color: theme.palette.primary.main
  },
  loading:{
    display:'block',
    margin: "10px auto"
  },
  orSeparetor:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#e8e8e8",
    width:'100%',
    height:2,
    margin: theme.spacing(7,0,4),
    '& span':{
      backgroundColor:'white',
      padding: '0 30px '
    }
  }
}))