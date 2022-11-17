import TemplateDefault from '../../src/templetes/Default'
import { 
  Container,
  Typography,
  Button
} from '@mui/material';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme)=> ({
  container:{
    padding: theme.spacing(8,0,6),
    },
  buttonAdd:{
    margin:'30px auto',
    display:'block',
  }
}))

export default function Home() {
  const classes = useStyles()
  return (
    <TemplateDefault>
      <Container className={classes.container} maxWidth="sm">
        <Typography component={'h1'} variant="h2" align='center'>
          Meus Anúncios
        </Typography>
        <Button variant='contained' color='primary' className={classes.buttonAdd}>
          Publicar novo anúncio
        </Button>

      </Container>
    </TemplateDefault>
  );
}
