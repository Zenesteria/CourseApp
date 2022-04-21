import { useState } from "react"
import DropdownItem from "./DropdownItem"
import DisplayBtn from "./DisplayBtn";
import Display from "./Display";

export default function Dropdown({index}) {
  const [active, setActive] = useState({
    id: 'algo'
  })
  switch(index){
    case 0:

      return (
        <div className="dropdown flex flex-col h-[10vh] absolute top-[22px] left-[-100%] w-[300px] pt-4">
            <div className="bg-white h-fit w-full text-black">
                <DropdownItem header={'AlgoExpert'} actColor={'#7580F0'} caption={'Ace the coding Interviews.'}/>
                <DropdownItem header={'SystemsExpert'} actColor={'#B31B00'} caption={'Ace the systems design interviews.'}/>
                <DropdownItem header={'MLExpert'} actColor={'orange'} caption={'Ace the machine learning Interviews.'}/>
                <DropdownItem header={'FrontendExpert'} actColor={'teal'} caption={'Ace the frontend Interviews.'}/>
                <DropdownItem header={'ProgrammingExpert'} actColor={'#FF2E5B'} caption={'Learn to code.'}/>
            </div>
        </div>
      )
    case 1:
      
      return (
        <div className="dropdown flex flex-col h-[550px] absolute top-[22px] left-[-100%] w-[600px] pt-4" data-pos={'110px'}>
            <div className="flex w-full h-full bg-white shadow-xl overflow-hidden rounded-lg">
                <div className="flex-[0.4] text-black">
                    <DisplayBtn header={'AlgoExpert'} actColor={'#7580F0'} id='algo'/>
                    <DisplayBtn header={'SystemsExpert'} actColor={'#B31B00'} id='systems'/>
                    <DisplayBtn header={'MLExpert'} actColor={'orange'} id='ml'/>
                    <DisplayBtn header={'FrontendExpert'} actColor={'teal'} id='frontend'/>
                    <DisplayBtn header={'Bonus'} actColor={'#FF2E5B'} id='bonus'/>
                </div>
                <div className="flex-[0.6] bg-purple-300">
                    <Display/>
                </div>
            </div>
        </div>
      )
  }
  
}
