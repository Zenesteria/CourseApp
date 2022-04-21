import {BsCreditCard} from 'react-icons/bs'
import CodeEditor from './CodeEditor'


export default function Showcase() {
  return (
    <div className="flex items-end w-full h-[70vh] bg-[rgb(11,8,45)]">
        <div className="flex h-[70%] md:h-[65%] w-full xl:w-[95%] ml-auto">
            <div className="flex flex-col items-center text-center md:text-left md:items-start h-fit mx-auto min-w-[360px] flex-[0.8] text-white p-4">
                <h1 className='text-[2rem] xl:text-[2.5rem] mb-2'>Brandname</h1>
                <p className='text-[0.9rem] sm:text-[0.8rem] xl:text-[1rem] mb-5'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                  Numquam explicabo nisi amet consectetur adipisicing.
                </p>
                <a href="#" className="text-[0.8rem] lg:text-[1rem] xl:text-[1.1rem] text-white bg-[rgb(93,153,244)] hover:bg-[rgb(37,95,182)] w-fit flex p-4 rounded-md items-center"><BsCreditCard className='mr-4 text-[1.3rem] xl:text-[1.5rem]'/> Buy Brandname</a>
            </div>
            <div className="hidden md:flex flex-col sm:w-[600px] xl:w-[650px] lg:mr-[3rem] xl:mr-[5rem] threedcont relative">
                <div className="absolute p-4 left-[-40px] top-[-100px] flex items-center justify-between threed h-[540px] w-full text-white">
                    <CodeEditor/>
                </div>
            </div>
        </div>
    </div>
  )
}






// SUB COMPS
