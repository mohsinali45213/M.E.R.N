import { useEffect, useState } from 'react'
const Home = () => {
  const [info, setInfo] = useState()
  const homePage = async () => {
    try {
      const res = await fetch('/api/about', {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          Accept: 'application/json',
        },
      })
      const data = await res.json()
      setInfo(data.name)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    homePage()
  }, [])

  return (
    <div className="flex mix justify-center text-center items-center" >
      <div className="w-full h-screen bg-sky-200"></div>
      <div className='absolute font-semibold'>
        <p className='font-mono text-sky-500'>WELCOME</p>
        <h1 className='text-4xl font-bold'>{info}</h1>
        <h4 className='text-xl mt-2'>
          {info?"Happy,to see you back":"We Are Te MERN Developer "}
          </h4>
      </div>
      <div className="w-full h-screen bg-pink-200"></div>
    </div>
  )
}

export default Home
