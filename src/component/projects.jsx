import React from "react";
/* tslint:disable:no-unused-variable */
import Project1Img from "./Assets/Project1.png";
import Project2Img from "./Assets/Project2.png";
import Project3Img from "./Assets/Project3.png";
import Project4Img from "./Assets/Project4.png";
import Project5Img from "./Assets/Project5.png";
import Project6Img from "./Assets/Project6.png";

export default function Projects() {
 
    return (
        <div>
            <div className="bg-indigo-800 m-20 max-w-full">
                <div className="grid justify-items-center m-10">
                    <h1 className="text-3xl text-white mt-10">Projects</h1>
                </div>

                </div>
                    <div className="grid grid-cols-2 gap-4 p-5">
                        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
                        
                             <div className="md:flex">
                                    <div className="p-8">
                                       <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                                       Personal Portfolio
                                       </div> 
                                       <a href="#"> HTML and CSS</a>
                                       <p className="mt-2 text-slate-500">
                                       Includes the use of Flexbox, media queries, and CSS variables. 
                                       </p>
                                    </div>
                                    <div className="md:shrink-0 p-5">
                                        <img src={Project1Img} alt="Project1" width={150} height={150} />
                                    </div>
                            </div>
                            </div>
                                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
                        
                                <div className="md:flex">
                                <div className="md:shrink-0 p-5">
                                   <img src={Project2Img} alt="Project1" width={150} height={150} />
                               </div>
                                   <div className="p-8">
                                      <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                                         Coding Quiz Challenge
                                       </div> 
                                    <a href="#">JavaScript and JQuery</a>
                                    <p className="mt-2 text-slate-500">
                                    Includes the use of Flexbox, media queries, and CSS variables. 
                                     </p>
                                    </div>
                            
                            </div>
                        </div>
                    <div/>
                    <hr/>
                    <div className="grid grid-cols-2 gap-4 p-5">
                    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
                        
                        <div className="md:flex">
                               <div className="p-8">
                                  <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                                  Personal Portfolio
                                  </div> 
                                  <a href="#"> HTML and CSS</a>
                                  <p className="mt-2 text-slate-500">
                                  Includes the use of Flexbox, media queries, and CSS variables. 
                                  </p>
                               </div>
                               <div className="md:shrink-0 p-5">
                                   <img src={Project1Img} alt="Project1" width={150} height={150} />
                               </div>
                       </div>
                    
                           <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
                   
                           <div className="md:flex">
                           <div className="md:shrink-0 p-5">
                              <img src={Project2Img} alt="Project1" width={150} height={150} />
                          </div>
                              <div className="p-8">
                                 <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                                    Coding Quiz Challenge
                                  </div> 
                               <a href="#">JavaScript and JQuery</a>
                               <p className="mt-2 text-slate-500">
                               Includes the use of Flexbox, media queries, and CSS variables. 
                                </p>
                               </div>
                            </div>
                            </div>
                    <div>
               </div>
            </div>
        </div>
    )
}