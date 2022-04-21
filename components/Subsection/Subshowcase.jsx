import {BsFillPlayCircleFill} from 'react-icons/bs';
import SiteHighlights from './SiteHighlights';

export default function Subshowcase() {
  return (
    <div className="flex flex-col items-center w-full h-fit min-h-[250px] my-[4rem] md:my-[10rem]">
        <div className="flex flex-col items-center w-fit mb-4">
            <h1 className="text-[1.5rem] lg:text-[2rem] font-semibold tracking-wider mb-4">What is Brandname?</h1>
            <div className="w-fit h-fit vidcont">
                <div className="flex vid relative overflow-hidden transition-all hover:text-white duration-100 cursor-pointer items-center w-fit py-2 px-4 border-2 bor border-black">
                    <BsFillPlayCircleFill className='text-[2rem] duration-100'/>
                    <p className='mx-4 font-semibold'>Watch the Video</p>
                </div>
            </div>
        </div>
        <SiteHighlights/>
    </div>
  )
}
