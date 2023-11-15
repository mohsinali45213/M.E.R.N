import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Logout = () => {

  const navigator = useNavigate()
  useEffect(() => {
    const callAbout = async () => {
      try {
        const res = await fetch('/api/logout', {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            Accept: 'application/json',
          },
          credentials: 'include',
        })
        if (!res.status=== 200) {
          throw new Error(res.error);
        }else{
          navigator("/login")
        }
      } catch (error) {
        console.log(error)
      }
    }

    callAbout()
  }, [])
  return (
    <div></div>
  )
}

export default Logout