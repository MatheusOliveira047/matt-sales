import { 
  Container,
  Typography,
  Box,
  TextField,
  Select,
  Button
} from '@mui/material'
import TemplateDefault from '../../src/templetes/Default'
import theme from '../../src/theme';

export default function Publish(){
  return(
    <TemplateDefault>
      <Container maxWidth="sm" sx={{ padding: theme.spacing(8,0,6) }}>
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
          label="ex.: Notebook Lenovo S145 I5"
          size='small'
          fullWidth
        />
        <br /><br />
        <Typography component={'h6'} variant="h6" sx={{ marginBottom:'5px' }} color='primary'>
            Categoria
        </Typography>
        <Select
          native
          value=""
          fullWidth
          onChange={()=> {}}
          inputProps={{
            name:'age'
          }}
        >
        <option value="">Selecione</option>
        <option value="1">Bebê e criança</option>
        <option value="2">Agricultura</option>
        <option value="3">Moda</option>
        <option value="4">Carros, Motos e Barcos</option>
        <option value="5">Serviços</option>
        <option value="6">Lazer</option>
        <option value="7">Animais</option>
        <option value="8">Moveis, Casa e Jardim</option>
        <option value="9">Imóveis</option>
        <option value="10">Equipamentos e ferramentas</option>
        <option value="10">Celulares e tablets</option>
        <option value="10">Esporte</option>
        <option value="10">Tecnologia</option>
        <option value="10">Emprego</option>
        <option value="10">Outros</option>
        </Select>

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
          <Button variant='contained' color='primary'>Publicar anúncio</Button>
        </Box>
      </Container>




    </TemplateDefault>
  )
}