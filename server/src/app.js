import express from 'express'
import dotenv from 'dotenv'
import { router } from './routers/auth.js'
import { connectDB } from './db/index.js'
import { User } from './models/user.models.js'

dotenv.config({
  path:"../.env"
})

const app = express()
connectDB()

app.use(router)

const middleware = (req,res,next)=>{
  console.log("Hello My Middleware");
  next()
}

app.listen(process.env.PORT,()=>{
  console.log(`Server Port : http://localhost:${process.env.PORT}`);
})

export {middleware}