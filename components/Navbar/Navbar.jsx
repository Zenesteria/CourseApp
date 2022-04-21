import NavLink from "./NavLink"
import {FaBars} from 'react-icons/fa'

export default function Navbar() {
  return (
    <nav className="flex w-full h-fit absolute top-0 left-0 justify-center text-white z-50">
      <div className="flex justify-center lg:justify-around items-center w-full p-2">
          <FaBars className="lg:hidden flex-[0.2] text-[1.5rem]"/>

          <div className="flex flex-col items-center flex-1 lg:flex-[0.25] text-center">
              <h1 className="text-[1rem] sm:text-[1.5rem] lg:text-[2rem] tracking-widest">Brand Name</h1>
              <p className="text-[0.6rem] sm:text-[0.7rem] lg:text-[1rem] text-[rgb(148,219,252)] ">Lorem ipsum dolor sit amet</p>
          </div>

          <ul className="hidden lg:flex flex-[0.4] justify-center">
              <NavLink text={'Products'} dropdown={true} dropdownIndex={0}/>
              <NavLink text={'Content'} dropdown={true} dropdownIndex={1}/>
              <NavLink text={'Team'}/>
              <NavLink text={'Purchase'}/>
          </ul>

          <div className=" flex flex-[0.3] justify-center">
              <a href="#" className="border-2 border-transparent hover:border-[rgb(148,219,252)]  rounded-md">Login</a>
          </div>
      </div>
    </nav>
  )
}
