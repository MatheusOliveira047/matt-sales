import dbConnect from '../utils/dbConnect'
import ProductsModel from '../models/products'
import path from 'path'
import fs from 'fs'
import formdable from 'formidable-serverless'

const get = async (req,res)=>{
  await dbConnect()

  const response = await ProductsModel.find()

  res.status(200).json(response)
}


const post = async (req,res )=>{
  await dbConnect()

  const form = new formdable.IncomingForm({
    multiples: true,
    uploadDir: 'public/uploads',
    keepExtensions: true,
  })

  form.parse(req, async (error, fields, data) => {
    if(error){
      return res.status(500).json({success: false})
    }

    const {files} = data

    const filesToRename = files instanceof Array
      ? files
      : [files]

    const filesToSave = []

    filesToRename.forEach(file=>{
      const timeStamp = Date.now()
      const random = Math.floor(Math.random() * 999999999999) + 1
      const extension = path.extname(file.name)
      const filename = `${timeStamp}_${random}${extension}`

      const oldpath = path.join(__dirname, '../../../../' + file.path)
      const newpath = path.join(__dirname, '../../../../' + form.uploadDir + '/' + filename)

      filesToSave.push({
       name: filename,
       path: newpath
      })

      fs.rename(oldpath,newpath,(error)=>{
        if(error){
          console.log(error)
          return res.status(500).json({success: false})
        }
      })
    })

    const { 
      title,
      category,
      description,
      price,
      name,
      email,
      phone,
      userId,
      image 
    } = fields

    const product = new ProductsModel({
      title,
      category,
      description,
      price,
      user:{
        name,
        email,
        phone,
        id: userId,
        image
      },
      files: filesToSave,
    })

    const register = await product.save()

    if (register) {
      res.status(201).json({success: true})
      
    }else{
      res.status(500).json({success: false})
      
    }

  })

}

export {
  post,
  get
}