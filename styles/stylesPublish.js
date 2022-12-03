import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme)=>({
  container:{
    paddingBottom: theme.spacing(3)
  },
  box:{
    backgroundColor:theme.palette.background.white, 
    padding: '10px', 
  },
  labelInput:{
    fontWeight: 400, 
    color: theme.palette.primary.main
  },
}))