import DisplayItem from "./DisplayItem";
import { useSelector } from "react-redux";
import {BsReverseLayoutTextWindowReverse} from 'react-icons/bs'

export default function Display(){
    const activeMenu = useSelector(state => state.display);

    switch(activeMenu.active){
        case 'algo':
            return(
                <div className="w-full p-4 h-full" style={{backgroundColor: activeMenu.bg}}>
                    <DisplayItem Icon={BsReverseLayoutTextWindowReverse} header='Coding Interview Questions'/>
                    <DisplayItem Icon={BsReverseLayoutTextWindowReverse} header='Data Structures Crash Course'/>
                    <DisplayItem Icon={BsReverseLayoutTextWindowReverse} header='Coding Interview Assessments'/>
                    <DisplayItem Icon={BsReverseLayoutTextWindowReverse} header='Mock Coding Interviews'/>
                    <DisplayItem Icon={BsReverseLayoutTextWindowReverse} header='Coding Interview Tips'/>
                </div>
            )
        case 'systems':
            return(
                <div className="w-full p-4 h-full" style={{backgroundColor: activeMenu.bg}}>
                    <DisplayItem Icon={BsReverseLayoutTextWindowReverse} header='Coding Interview Questions'/>
                    <DisplayItem Icon={BsReverseLayoutTextWindowReverse} header='Data Structures Crash Course'/>
                    <DisplayItem Icon={BsReverseLayoutTextWindowReverse} header='Coding Interview Assessments'/>
                </div>
            )
        case 'ml':
            return(
                <div className="w-full p-4 h-full" style={{backgroundColor: activeMenu.bg}}>
                    <DisplayItem Icon={BsReverseLayoutTextWindowReverse} header='Coding Interview Questions'/>
                    <DisplayItem Icon={BsReverseLayoutTextWindowReverse} header='Data Structures Crash Course'/>
                    <DisplayItem Icon={BsReverseLayoutTextWindowReverse} header='Coding Interview Assessments'/>
                    <DisplayItem Icon={BsReverseLayoutTextWindowReverse} header='Mock Coding Interviews'/>
                    <DisplayItem Icon={BsReverseLayoutTextWindowReverse} header='Coding Interview Tips'/>
                </div>
            )
        case 'frontend':
            return(
                <div className="w-full p-4 h-full" style={{backgroundColor: activeMenu.bg}}>
                    <DisplayItem Icon={BsReverseLayoutTextWindowReverse} header='Coding Interview Questions'/>
                    <DisplayItem Icon={BsReverseLayoutTextWindowReverse} header='Data Structures Crash Course'/>
                    <DisplayItem Icon={BsReverseLayoutTextWindowReverse} header='Coding Interview Assessments'/>
                    <DisplayItem Icon={BsReverseLayoutTextWindowReverse} header='Mock Coding Interviews'/>
                    <DisplayItem Icon={BsReverseLayoutTextWindowReverse} header='Coding Interview Tips'/>
                </div>
            )
        case 'bonus':
            return(
                <div className="w-full p-4 h-full" style={{backgroundColor: activeMenu.bg}}>
                    <DisplayItem Icon={BsReverseLayoutTextWindowReverse} header='Coding Interview Questions'/>
                    <DisplayItem Icon={BsReverseLayoutTextWindowReverse} header='Data Structures Crash Course'/>
                    <DisplayItem Icon={BsReverseLayoutTextWindowReverse} header='Coding Interview Assessments'/>
                    <DisplayItem Icon={BsReverseLayoutTextWindowReverse} header='Mock Coding Interviews'/>
                    <DisplayItem Icon={BsReverseLayoutTextWindowReverse} header='Coding Interview Tips'/>
                </div>
            )
    }
}