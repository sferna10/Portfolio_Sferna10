import { MdFacebook } from "react-icons/md";
import { TfiInstagram } from "react-icons/tfi";
import { PiPinterestLogoFill } from "react-icons/pi";
import HeroPic from "../assets/HeroPic.jpg";

const hero = () => {
  return (
    <section className='flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white'>
      <div className='lg:w-1/3 ssm:w-fit'>
         <p className='text-4x1 mb-5 text-slate-300'>I am</p>
         <h1 className='text-6x1'>Silvia Fernandez</h1>
         <hr/>
            <p className='mt-10 text-slate-300 font-sans'>
            A full stalk developer, and web graphic designer.</p>
      </div>
      <div className='w-1/3 items-center ssm:w-fit'>
      <img src={HeroPic} alt="woman" width={250} height={250} 
      className='rounded-full w-full border-8  border-white'/>
      </div>

      <div className="w-1/3 ssm:w-fit">
      <p className='text-4x1 mb-4'>About Me</p>
      <p className=' text-slate-300'>
      Web design is my passion.
      
      </p>
      <button className='bg-white text-indigo-600 px-10 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white '>
         Show more...
      </button>

      <div className='flex mt-5 space-x-4 cursor-pointer'>
          
          <TfiInstagram size={40} className='border-4 hover:border-indigo-800 rounded-full'/>
          <MdFacebook size={40} className='border-4 hover:border-indigo-800 rounded-full'/>
          <PiPinterestLogoFill size={40} className='border-4 hover:border-indigo-800 rounded-full'></PiPinterestLogoFill>
      </div>
      </div>
    </section>
  )
}

export default hero
