import nextConnect from 'next-connect'
import {post,get} from '../../src/controllers/products'

const route = nextConnect()

route.post(post)
route.get(get)

export default route

export const config = {
  api: {
    bodyParser: false
  }
}