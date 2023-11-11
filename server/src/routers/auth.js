import express from 'express'
const router = new express.Router()
import { User } from '../models/user.models.js'

router.post('/register', async (req, res) => {
  try {
    const { name, email, phone, work, password, cPassword } = req.body

    if (!name || !email || !phone || !work || !password || !cPassword) {
      return res.status(422).json({ error: 'All filed are required' })
    }
    const userExist = await User.findOne({ email })

    if (userExist) {
      return res.status(422).json({ error: 'Email already exist' })
    }
    const user = new User({
      name,
      email,
      phone,
      work,
      password,
      cPassword,
    })
    await user.save()
    res.send(user).status(201)
  } catch (error) {
    res.send({ error: 'User is not register' }).status(422)
  }
})

router.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(422).json({ error: 'Invalid login detail' })
    }

    const userLogin = await User.findOne({ email })
    if (!userLogin) {
      return res.status(422).json({ error: 'Invalid login detail' })
    }

    res.send(userLogin)
  } catch (error) {
    console.log(error)
  }
})

export default router
