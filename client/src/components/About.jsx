import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const About = () => {
  const [info, setInfo] = useState('')
  const [loading, setLoading] = useState(true)
  const navigator = useNavigate()
  useEffect(() => {
    const callAbout = async () => {
      try {
        const res = await fetch('/api/about', {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            Accept: 'application/json',
          },
          credentials: 'include',
        })
        const data = await res.json()
        setInfo(data)
        if (res.status !== 200) {
          navigator('/login')
        }
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    callAbout()
  }, [])
  return (
    loading?<>loading...</>:
    <div className="w-full bg-zinc-100 flex justify-center">
      <form className="flex flex-col items-center py-5 px-10 bg-white my-24 rounded-md shadow-md">
        <div className="flex gap-5 items-start">
          <img
            src="./images/a.jpg"
            alt=""
            className="w-40 h-40 border rounded-full"
          />
          <div className="flex flex-col gap-1">
            <h2 className="font-semibold">Mohsin Ali</h2>
            <h3 className="font-thin text-xs text-sky-700">web Developer</h3>
            <p className="font-mono text-sm">RANKING:1/10</p>
          </div>
          <button className="ml-56 bg-slate-800 text-white text-sm p-3 rounded-md">
            Edit Profile
          </button>
        </div>
        <div className="flex justify-between w-full font-semibold">
          <div className="flex flex-col gap-2">
            <p>Youtube</p>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Linkedin</p>
            <p>Fiver</p>
          </div>
          <div className="flex flex-col gap-2 relative right-9">
            <p>User id</p>
            <p>Name</p>
            <p>Email</p>
            <p>Phone</p>
            <p>Profession</p>
          </div>
          <div className="flex flex-col gap-2 text-sky-500">
            <p>{info._id}</p>
            <p>{info.name}</p>
            <p>{info.email}</p>
            <p>{info.phone}</p>
            <p>{info.work}</p>
          </div>
        </div>
      </form>
    </div>
  )
}

export default About
