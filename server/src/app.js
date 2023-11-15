import express from 'express'
import dotenv from 'dotenv'
import  router  from './routers/auth.js'
import { connectDB } from './db/index.js'
import cookieParser from 'cookie-parser'
dotenv.config({
  path:"../.env"
})

connectDB()
const app = express()

app.use(cookieParser())
app.use(router)
app.use(express.json())
app.use("/api",router)



app.listen(process.env.PORT,()=>{
  console.log(`Server Port : http://localhost:${process.env.PORT}`);
})
