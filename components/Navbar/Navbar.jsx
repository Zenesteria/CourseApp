import NavLink from "./NavLink"

export default function Navbar() {
  return (
    <nav className="flex w-full h-fit absolute top-0 left-0 justify-center text-white">
      <div className="flex justify-between items-center w-[90%] p-2">
          <div className="flex flex-col w-fit ">
              <h1 className="lg:text-[2rem] tracking-widest">Brand Name</h1>
              <p className="lg:text-[1rem] text-[rgb(148,219,252)] ">Lorem ipsum dolor sit amet</p>
          </div>

          <ul className="flex justify-center">
              <NavLink text={'Products'} dropdown={true} dropdownIndex={0}/>
              <NavLink text={'Content'} dropdown={true} dropdownIndex={1}/>
              <NavLink text={'Team'}/>
              <NavLink text={'Purchase'}/>
          </ul>

          <div className="flex flex-[0.3] justify-center">
              <a href="#" className="border-2 border-transparent hover:border-[rgb(148,219,252)] px-[0.5rem] rounded-md">Login</a>
          </div>
      </div>
    </nav>
  )
}
