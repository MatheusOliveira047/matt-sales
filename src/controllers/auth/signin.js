import UserModel from '../../models/users'
import {compare} from '../../utils/password'
import dbConnect from '../../utils/dbConnect'

const post = async(req,res)=>{
  const {
    email,
    password,
  } = req.body

  await dbConnect()

  const user = await UserModel.findOne({ email })

  if(!user){
    return res.status(401).json({success: false, message:'invalid'})
  }

  const passInCorrect = compare(password, user.password)
  
  if(passInCorrect){
    return res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email, 
    })
  }

  return res.status(401).json({success: false, message:'invalid'})
}

export{
  post
}