import { useSelector, useDispatch } from "react-redux";
import { switchActive } from "../../../redux/displaySlice";


export default function DisplayBtn ({header, id, actColor}){
    const activeMenu = useSelector(state => state.display);
    const dispatch = useDispatch();

    const handleMouseOver = () => {
        dispatch(switchActive({active: id, bg:actColor}));
    }

  return (
    <div className="w-full p-4" style={{backgroundColor:activeMenu.active === id ? actColor : 'white', color:activeMenu.active === id ? 'white' : ''}} onMouseOver={handleMouseOver}>
        <h1 className="font-bold text-[1.2rem] transition-none">{header}</h1>
    </div>
  )
}