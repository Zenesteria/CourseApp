import {BsCreditCard} from 'react-icons/bs'
import CodeEditor from './CodeEditor'


export default function Showcase() {
  return (
    <div className="flex items-end w-full h-[70vh] bg-[rgb(11,8,45)]">
        <div className="flex h-[65%] w-[90%] ml-auto">
            <div className="flex flex-col flex-1 text-white">
                <h1 className='lg:text-[2.5rem] mb-2'>Brandname</h1>
                <p className='lg:text-[1.1rem] mb-5'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                  Numquam explicabo nisi amet consectetur adipisicing.
                </p>
                <a href="#" className="lg:text-[1.1rem] text-white bg-[rgb(93,153,244)] hover:bg-[rgb(37,95,182)] w-fit flex p-4 rounded-md items-center"><BsCreditCard className='mr-4 text-[1.5rem]'/> Buy Brandname</a>
            </div>
            <div className="flex flex-col w-[650px] mr-[5rem] threedcont relative">
                <div className="absolute left-[-40px] top-[-80px] flex items-center justify-center threed h-[540px] w-full text-white">
                    <CodeEditor/>
                    <CodeEditor/>
                </div>
            </div>
        </div>
    </div>
  )
}






// SUB COMPS
