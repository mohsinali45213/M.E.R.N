import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name:{
    type:String,
    require:true,
  },
  email:{
    type:String,
    require:true,
  },
  phone:{
    type:Number,
    require:true,
  },
  work:{
    type:String,
    require:true,
  },
  password:{
    type:String,
    require:true,
  },
  conformPassword:{
    type:String,
    require:true,
  },
},{timestamps:true})

export const User = new mongoose.model("User",userSchema)