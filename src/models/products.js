import mongoose from 'mongoose';

const fileSchema = new mongoose.Schema({
  name: String,
  path: String,
})

const schema = new mongoose.Schema({
  title:{
    type: String,
    required: [true]
  },
  category:{
    type: String,
    required: [true]
  },
  description:{
    type: String,
    required: [true]
  },
  price:{
    type: Number,
    required: [true]
  },
  user:{
    id:String,
    name:String,
    email:String,
    phone:String,
    image:String,
  },
  files:{
    type: [fileSchema],
    default: undefined,
  },
  date:{
    type:String
  },
  location:{
    uf:String,
    city:String,
  }

})

export default mongoose.models.products || mongoose.model('products', schema)

