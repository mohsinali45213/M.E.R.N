
const About = () => {
  return (
    <div className="w-full bg-zinc-100 flex justify-center">
      <form className="flex flex-col items-center py-5 px-10 bg-white my-24 rounded-md shadow-md">
        <div className="flex gap-5 items-start">
          <img src="./images/a.jpg" alt="" className="w-40 h-40 border rounded-full"/>
          <div className="flex flex-col gap-1">
            <h2 className="font-semibold">Mohsin Ali</h2>
            <h3 className="font-thin text-xs text-sky-700">web Developer</h3>
            <p className="font-mono text-sm">RANKING:1/10</p>
          </div>
          <button className="ml-56 bg-slate-800 text-white text-sm p-3 rounded-md">Edit Profile</button>
        </div>
        <div className="w-full">
          <table className="w-full font-sans text-sm font-semibold ">
            <tr>
              <td className="pt-6">Youtube</td>
              <td className="pt-6">User id</td>
              <td className="pt-6 text-center text-sky-500">9897097977</td>
            </tr>
            <tr>
              <td className="pt-6">Instagram</td>
              <td className="pt-6">Name</td>
              <td className="pt-6 text-center text-sky-500">Mohsin Ali</td>
            </tr>
            <tr>
              <td className="pt-6">Facebook</td>
              <td className="pt-6">Email</td>
              <td className="pt-6 text-center text-sky-500">mohsin@gmail.com</td>
            </tr>
            <tr>
              <td className="pt-6">Twitter</td>
              <td className="pt-6">Phone</td>
              <td className="pt-6 text-center text-sky-500">9856745342</td>
            </tr>
            <tr>
              <td className="pt-6">Linkedin</td>
              <td className="pt-6">Profession</td>
              <td className="pt-6 text-center text-sky-500">Web Developer</td>
            </tr>
          </table>
        </div>
      </form>
    </div>
  )
}

export default About