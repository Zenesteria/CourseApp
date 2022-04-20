import Dropdown from "./Dropdown/Dropdown";


export default function NavLink({text, dropdown, dropdownIndex}) {
  return (
    <li className="px-4 nav-link relative items-center text-[0.9rem]">
        <a href="#" className="nav-item flex flex-col items-center">{text}</a>
        {dropdown && <Dropdown index={dropdownIndex}/>}
    </li>
  )
}
