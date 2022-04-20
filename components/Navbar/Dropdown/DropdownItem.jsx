import { useState } from "react";
import {BsReverseLayoutTextWindowReverse} from 'react-icons/bs'

export default function DropdownItem({caption, header, actColor}) {
    const [active, setActive] = useState(false);

    const handleMouseOver = () => {
        setActive(true);
    }
    const handleMouseLeave = () => {
        setActive(false);
    }
  return (
    <div className="w-full p-4 hover:text-[white]" style={{backgroundColor: active ? actColor : ''}} onMouseLeave={handleMouseLeave} onMouseOver={handleMouseOver}>
        <h1 className="font-bold text-[1.2rem] transition-none">{header}</h1>
        <p className="transition-none">{caption}</p>
    </div>
  )
}

export const DisplayMenu = ({header, actColor}) => {
    const [active, setActive] = useState(false);

    const handleMouseOver = () => {
        setActive(true);
    }

  return (
    <div className="w-full p-4 hover:text-[white]" style={{backgroundColor: active ? actColor : ''}} onMouseOver={handleMouseOver}>
        <h1 className="font-bold text-[1.2rem] transition-none">{header}</h1>
    </div>
  )
}

export const Display = () => {
    return(
        <div className="w-full p-4">
            <DisplayItem Icon={BsReverseLayoutTextWindowReverse} header='Coding Interview Questions'/>
        </div>
    )
}

export const DisplayItem = ({Icon, header}) => {
    return(
        <div className="flex text-white bg-[rgba(0,0,0,0.25)] p-4 mb-2 items-center">
            <Icon className="text-[1.5rem]"/>
            <h1 className="mx-auto">{header}</h1>
        </div>
    )
}
