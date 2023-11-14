import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
const SignUp = () => {
  const navigator =  useNavigate()
  const [user, setUser] = useState({})
  function getUser(e) {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const postData = async (e) => {
    if (user.password === user.cPassword) {
      try {
        const { name, email, phone, work, password, cPassword } = user
        e.preventDefault()
        let result = await fetch('/api/register', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            work,
            password,
            cPassword,
          }),
        }).catch(error=>console.log(error))
        const data = await result.json()
        console.log(data);
        if(result.status===400 || !data){
          window.alert(data.error)
        }else{
          navigator("/login")
        }
      } catch (error) {
        console.log(error)
      }
    } else {
      console.log('Password are not same')
    }
  }

  return (
    <div className="w-full flex-wrap flex justify- place-content-center bg-zinc-100">
      <div className="flex bg-white my-7 justify-between border md:px-20 min-[420px]:p-10 md:py-14 w-3/5 rounded-md shadow-sm shadow-slate-300">
        <form className="xl:w-80 sm:w-full font-semibold text-sm">
          <h2 className="text-3xl font-extrabold  font-mono">Sign Up</h2>
          <p className="mb-8 mt-1 font-mono text-gray-900">
            Have already an account?Login
          </p>
          <div className="flex border-b-2 border-gray-200 mt-6 pb-2 items-center text-gray-800">
            <img src="./images/user.png" alt="name" className="w-4 h-4" />
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              className=" focus:outline-none ml-5 flex-1"
              required
              value={user.name || ''}
              onChange={getUser}
            />
          </div>
          <div className="flex border-b-2 border-gray-200 mt-6 pb-2 items-center text-gray-800">
            <img src="./images/email.png" alt="name" className="w-4 h-4" />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              className=" focus:outline-none ml-5 flex-1"
              required
              value={user.email || ''}
              onChange={getUser}
            />
          </div>
          <div className="flex border-b-2 border-gray-200 mt-6 pb-2 items-center text-gray-800">
            <img src="./images/telephone.png" alt="name" className="w-4 h-4" />
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Mobile Number"
              className=" focus:outline-none ml-5 flex-1"
              pattern="[0-9]*"
              required
              value={user.phone || ''}
              onChange={getUser}
            ></input>
          </div>
          <div className="flex border-b-2 border-gray-200 mt-6 pb-2 items-center text-gray-800">
            <img src="./images/youtube.png" alt="name" className="w-4 h-4" />
            <input
              type="text"
              name="work"
              id="work"
              placeholder="Your work"
              className=" focus:outline-none ml-5 flex-1"
              required
              value={user.work || ''}
              onChange={getUser}
            />
          </div>
          <div className="flex border-b-2 border-gray-200 mt-6 pb-2 items-center text-gray-800">
            <img src="./images/padlock.png" alt="name" className="w-4 h-4" />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className=" focus:outline-none ml-5 flex-1"
              required
              value={user.password || ''}
              onChange={getUser}
            />
          </div>
          <div className="flex border-b-2 border-gray-200 mt-6 pb-2 items-center text-gray-800">
            <img src="./images/padlock1.png" alt="name" className="w-4 h-4" />
            <input
              type="password"
              name="cPassword"
              id="cPassword"
              placeholder="Confirm your password"
              className=" focus:outline-none ml-5 flex-1"
              required
              value={user.cPassword || ''}
              onChange={getUser}
            />
          </div>
          <div className="flex mt-6 pb-2 items-center">
            <button
              className="bg-slate-800 text-white py-4 px-8 rounded-md "
              onClick={postData}
            >
              Submit
            </button>
          </div>
        </form>
        <img
          src="./images/bg1.jpg"
          alt=""
          className="w-80 min-[420px]:hidden xl:block contrast-125"
        />
      </div>
    </div>
  )
}

export default SignUp
