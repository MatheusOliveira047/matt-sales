import UsersModel from '../models/users'
import { crypto } from '../utils/password'
import dbConnect from '../utils/dbConnect'

const get = async (req,res)=>{
  await dbConnect()
  const users = await UsersModel.find()
  res.status(200).json({success: true, users})
}

const post = async (req,res )=>{
  const { 
    name,
    email,
    password,
  } = req.body

  await dbConnect()

  const isEmail = await UsersModel.findOne({ email })

  if(isEmail){
    return res.status(401).json({success: false, message:'Usuário já existe'})
  }

  const passwordCrypto = await crypto(password)

  const user = new UsersModel({
    name,
    email,
    password: passwordCrypto
  })

  user.save()
  res.status(200).json({success: true})
}

export {
  get,
  post
}