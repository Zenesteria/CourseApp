import { useEffect, useState } from "react";
import { useSelector } from "react-redux";






export default function DropdownItem({caption, header, actColor}) {
    const activeMenu = useSelector(state => state.display);
    // useEffect(() => {
    //   const firstLink = document.getElementsByClassName('dropdown')[0].children[0].children[0];
    //   firstLink.classList.add('firstLink');
    // })

    const [active, setActive] = useState(false);

    const handleMouseOver = () => {
        setActive(true);
    }
    const handleMouseLeave = () => {
        setActive(false);
    }

  return (
    <div className="w-full p-4 hover:text-[white] relative" style={{backgroundColor: active ? actColor : ''}} onMouseLeave={handleMouseLeave} onMouseOver={handleMouseOver}>
        <h1 className="font-bold text-[1.2rem] transition-none">{header}</h1>
        <p className="transition-none">{caption}</p>
    </div>
  )
}






