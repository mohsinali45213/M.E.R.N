import mongoose from 'mongoose'

const connectDB = async() =>{
  try {
    const db = await mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`)
    console.log("Connection Successful...");
  } catch (error) {
    console.log("Connection Failed ::",error);
    process.exit(1);
  }
}

export {connectDB}