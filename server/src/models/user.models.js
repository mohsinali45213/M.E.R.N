import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    work: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    massages:[
      {
        name: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: true,
        },
        phone: {
          type: Number,
          required: true,
        },
        massage: {
          type: String,
          required: true,
        },
      }
    ],
    tokens: [
      {
        token: {
          type: String,
          required:true
        },
      },
    ],
  },
  { timestamps: true }
)

//password hashing
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 12)
  }
  next()
})

//token generating
userSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY)
    this.tokens = this.tokens.concat({token})
    await this.save()
    return token
  } catch (error) {
    console.log(error)
  }
}

//store the massage

userSchema.methods.addMassage =async function(name,email,phone,massage){
  try {
    this.massages = this.massages.concat({name,email,phone,massage})
    await this.save()
    return this.massage
  } catch (error) {
    console.log(error);
  }
}

export const User = mongoose.model('User', userSchema)
