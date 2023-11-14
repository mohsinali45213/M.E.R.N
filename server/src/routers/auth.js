import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
const router = new express.Router()
import { User } from '../models/user.models.js'

//Register
router.post('/register', async (req, res) => {
  try {
    const { name, email, phone, work, password, cPassword } = req.body
    
    if (!name || !email || !phone || !work || !password || !cPassword) {
      return res.status(400).json({ error: 'All filed are required' })
    }
    const userExist = await User.findOne({ email })

    if (userExist) {
      return res.status(400).json({ error: 'Email already exist' })
    } else if (password != cPassword) {
      return res.status(400).json({ error: 'Password are not match' })
    } else {
      const user = new User({
        name,
        email,
        phone,
        work,
        password,
      })
      await user.save()
      res.send({info:"User Is Register"}).status(201)
    }
  } catch (error) {
    res.send({ error: 'Server error'}).status(500)
  }
})

//login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ error: 'Invalid login detail' })
    }

    const userLogin = await User.findOne({ email })

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password)
      //token
      const token = await userLogin.generateAuthToken()

      res.cookie('jwtoken', token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      })

      if (!isMatch) {
        res.status(400).json({ error: 'Invalid login detail' })
      } else {
        res.json({ Info: 'user Login successful...' })
      }
    } else {
      res.status(400).json({ error: 'Invalid login detail' })
    }
  } catch (error) {
    console.log(error)
  }
})

export default router
