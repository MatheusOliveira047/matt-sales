import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name:{
    type: String,
    required: [true, 'O Campo "Nome" é obrigatório']
  },
  email:{
    type: String,
    required: [true, 'O Campo "Email" é obrigatório'],
    unique: true
  },
  password:{
    type: String,
    required: [true, 'O Campo "Senha" é obrigatório']
  },

})

export default mongoose.models.users || mongoose.model('users', schema)

