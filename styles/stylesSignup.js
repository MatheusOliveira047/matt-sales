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
  }
}))