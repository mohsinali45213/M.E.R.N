import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigator = useNavigate()

  const login = async (e) => {
    e.preventDefault()

    try {
      let res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          "Content-type":"application/json",
          "Accept":"application/json"
        },
        body:JSON.stringify({email,password})
      })
      const data = await res.json()
      if(res.status===400 || !data){
        window.alert(data.error)
      }else{
        navigator("/")
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="w-full flex-wrap flex justify- place-content-center bg-zinc-100">
      <div className="flex bg-white my-32 justify-between border md:px-20 min-[420px]:p-10 md:py-14 w-4/12 rounded-md shadow-sm shadow-slate-300">
        <form className="w-full font-semibold text-sm">
          <h2 className="text-3xl font-extrabold  font-mono">Sign In</h2>
          <p className="mb-8 mt-1 font-mono text-gray-900">
            Don&apos;t have an account?&nbsp;Sign up
          </p>
          <div className="flex border-b-2 border-gray-200 mt-6 pb-2 items-center text-gray-800">
            <img src="./images/email.png" alt="name" className="w-4 h-4" />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              className=" focus:outline-none ml-5 flex-1"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex mt-6 pb-2 items-center">
            <button
              onClick={login}
              className="bg-slate-800 text-white py-4 px-8 rounded-md"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
