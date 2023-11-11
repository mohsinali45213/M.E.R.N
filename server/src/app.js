import express from 'express'
import dotenv from 'dotenv'
import  router  from './routers/auth.js'
import { connectDB } from './db/index.js'

dotenv.config({
  path:"../.env"
})

connectDB()
const app = express()

app.use(router)
app.use(express.json())
app.use("/api",router)

const middleware = (req,res,next)=>{
  console.log("Hello My Middleware");
  next()
}

app.listen(process.env.PORT,()=>{
  console.log(`Server Port : http://localhost:${process.env.PORT}`);
})
