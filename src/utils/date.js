const data = new Date()

const formatter = Intl.DateTimeFormat('pt-Br',{
  dateStyle: 'long'
})

export const dataAtual = formatter.format(data)

