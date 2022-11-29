import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import axios from 'axios'

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),

    Providers.Credentials({
      name: 'Credentials',
      async authorize(credentials){
        const res = await axios.post('http://localhost:3000/api/auth/signin', credentials)

        const user = res.data

        console.log(user,res)
        if(user){
          return user
        } else{
          throw '/auth/signin?i=1'
        }

      }

    }),
   

  ],


  session:{
    jwt:true,
   
  },

  jwt: {
    secret: process.env.JWT_TOKEN,
  },

  database: process.env.MONGODB_URI,
})