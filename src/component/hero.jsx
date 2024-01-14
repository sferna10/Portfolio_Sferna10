import { FaPinterest, FaInstagram,FaFacebook } from "react-icons/fa";
import HeroPic from "../assets/abstrac-background.jpg";

const hero = () => {
  return (
    <section className='flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white'>
      <div className='lg:w-1/3 ssm:w-fit'>
         <p className='text-4x1 mb-5 text-slate-300'>I'm</p>
         <h1 className='text-6x1'>Silvia Fernandez</h1>
         <hr/>
            <p className='nt-10 text-6x1-xl text-slate-300 font-sans'>
            A full stalk developer In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, </p>
      </div>
      <div className="w-1/3 items-center ssm:w-fit">
      <img src={HeroPic} alt="woman" width={{250} height={250} className="rounded-full w-full border-8  border-white"}/div>
      <div>
      <p>About Me</p>
      <p>
      
      </p>
      </div>
    </section>
  )
}

export default hero
