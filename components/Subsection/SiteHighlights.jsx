import {BsFillCalendar3WeekFill} from 'react-icons/bs'

export default function SiteHighlights() {
  return (
    <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-4 h-fit w-[80%] p-4">
        <Highlight/>
        <Highlight/>
        <Highlight/>
        <Highlight/>
        <Highlight/>
        <Highlight/>
        <Highlight/>
        <Highlight/>
        <Highlight/>
    </div>
  )
}


export const Highlight = () => {
    return(
        <div className="flex justify-center items-center w-full h-[300px] hover:shadow-[0_0_30px_rgba(0,0,0,0.1)] p-2">
            <div className="flex w-full h-full max-w-[300px] flex-col items-center text-center justify-center">
                <BsFillCalendar3WeekFill className='text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] text-blue-400 mb-2'/>
                <h3 className='text-[1.1rem] xl:text-[1.3rem] font-semibold'>160 Handpicked Questions</h3>
                <p className='text-[0.8rem] lg:text-[0.9rem] mb-1'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Laborum quod consequatur odio, ipsa fugiat facilis illum inventore. 
                    Distinctio, animi perspiciatis?
                </p>
                <a href="#" className='text-[0.8rem] hover:underline text-blue-400'>Learn More.</a>
            </div>
        </div>
    )
}
