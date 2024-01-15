import React from 'react';
/* tslint:disable:no-unused-variable */
import Project1Img from "./Project1.png";
import Project2Img from "./Project2.png";
import Project3Img from "./Project3.png";
import Project4Img from "./Project4.png";
import Project5Img from "./Project5.png";
import Project6Img from "./Project6.png";

export default function Projects() {
  return (
    <>
    <div className="bg-indigo-800 m-20 max-w-full">
         <div className="grid justify-items-center m-10">
            <h1 className="text-3xl text-white mt-10">Projects</h1>
   </div>

   <>
    <div className='grid grid-cols-2 gap-4 p-5'>
        <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden m:max-w-2xl hover:animate-pulse'>
   </div>
   
          <div className='md:flex'>
          <div className="md:shrink-0 p-5">
             <div className='p-8'>
             <div className='uppercase tracing-wide text-sm to-indigo-500 font-semibold'>
            Professional Portfolio             
             </div>
             <a href="#">Advanced CSS and HTMl"</a>
             <p className='mt-2 text-slate-500'> 
             This project includes the use of Flexbox, media queries, and CSS variables</p>
             </div>
             <div className="md:shrink-0 p-5">
            <img src={Project1Img} alt="green background and woman" width={150}height={150}/>
        </div>
        </div>
        <hr/>
         <div className='grid grid-cols-2 gap-4 p-5'>
         <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden m:max-w-2xl hover:animate-pulse'>
    </div>
    
           <div className='md:flex'>
           <div className="md:shrink-0 p-5">
           <div className="md:shrink-0 p-5">
           <img src={Project2Img} alt="green background and woman" width={150}height={150}/>
              <div className='p-8'>
              <div className='uppercase tracing-wide text-sm to-indigo-500 font-semibold'>
             Professional Portfolio             
              </div>
              <a href="#">Advanced CSS and HTMl"</a>
              <p className='mt-2 text-slate-500'> 
              This project includes the use of Flexbox, media queries, and CSS variables</p>
              </div>
          
         </div>
         </div>
         </div>
        </div>
        </div>
        </>
    )
}
