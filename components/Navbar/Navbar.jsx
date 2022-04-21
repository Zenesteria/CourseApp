import NavLink from "./NavLink"
import {FaBars} from 'react-icons/fa'

export default function Navbar() {
  return (
    <nav className="flex w-full h-fit absolute top-0 left-0 justify-center text-white z-50">
      <div className="flex justify-between items-center w-[90%] p-2">
          <div className="flex flex-col w-fit ">
              <h1 className="lg:text-[2rem] tracking-widest">Brand Name</h1>
              <p className="text-[0.7rem] lg:text-[1rem] text-[rgb(148,219,252)] ">Lorem ipsum dolor sit amet</p>
          </div>

          <ul className="hidden lg:flex justify-center">
              <NavLink text={'Products'} dropdown={true} dropdownIndex={0}/>
              <NavLink text={'Content'} dropdown={true} dropdownIndex={1}/>
              <NavLink text={'Team'}/>
              <NavLink text={'Purchase'}/>
          </ul>

          <div className="hidden lg:flex flex-[0.3] justify-center">
              <a href="#" className="border-2 border-transparent hover:border-[rgb(148,219,252)] px-[0.5rem] rounded-md">Login</a>
          </div>

          <FaBars className="block lg:hidden ml-auto"/>
      </div>
    </nav>
  )
}
