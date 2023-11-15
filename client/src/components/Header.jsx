import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className="flex justify-between bg-slate-800 text-white py-4 px-8 sticky top-0 z-50">
      <h2>LOGO</h2>
      <ul className="flex">
        <li className="mr-8 font-semibold pb-1 ">
          <NavLink to="/" className={({isActive})=>`${isActive?"text-orange-500 border-b-2 pb-1":""}`}> Home</NavLink>
        </li>
        <li className="mr-8 font-semibold pb-1">
          <NavLink to="/about" className={({isActive})=>`${isActive?"text-orange-500 border-b-2 pb-1":""}`}>About </NavLink>
        </li>
        <li className="mr-8 font-semibold pb-1">
          <NavLink to="/contact" className={({isActive})=>`${isActive?"text-orange-500 border-b-2 pb-1":""}`}>Contact</NavLink>
        </li>
        <li className="mr-8 font-semibold pb-1">
          <NavLink to="/login" className={({isActive})=>`${isActive?"text-orange-500 border-b-2 pb-1":""}`}>Login </NavLink>
        </li>
        <li className="mr-8 font-semibold pb-1">
          <NavLink to="/register" className={({isActive})=>`${isActive?"text-orange-500 border-b-2 pb-1":""}`}>Register </NavLink>
        </li>
        <li className="mr-8 font-semibold pb-1">
          <NavLink to="/logout" className={({isActive})=>`${isActive?"text-orange-500 border-b-2 pb-1":""}`}>Logout </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Header
