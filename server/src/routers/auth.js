import express from 'express'
const router = new express.Router
const app = express()


router.get('/', (req, res) => {
  res.send('Home')
})

router.post('/register', (req, res) => {
  console.log(req.body);
  res.json({massage:req.body})
})

router.get('/contact', (req, res) => {
  res.send('contactHome')
})

router.get('/signin', (req, res) => {
  res.send('contactHome')
})

router.get('/signup', (req, res) => {
  res.send('contactHome')
})
export {router}