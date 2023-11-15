import { User } from '../models/user.models.js'
import jwt from 'jsonwebtoken'

const Authenticate = async(req,res,next) =>{
  try {
    const token = req.cookies.jwt
    const verifyToken = jwt.verify(token,process.env.SECRET_KEY)

    const rootUser = await User.findOne({_id:verifyToken._id,"tokens.token":token})

    if(!rootUser){throw new error("User not Found")}
    req.token=token
    req.rootUser = rootUser
    req.UserId = rootUser._id

    next();

  } catch (error) {
    res.status(401).json({error:"Unauthorize user"})
    console.log(error);
  }
}
export default Authenticate