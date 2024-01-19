import React from 'react'

export default function Skills() {

    
    return (

        <div className="bg-indigo-800 m-20 max-w-full">
          <div className="grid justify-items-center m-10">
            <h1 className="text-3xl text-white mt-10">Projects</h1>
          </div>
        </div>
        {/* first row */}
        <div className="grid grid-cols-2 gap-4 p-5">
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
            <div className="md:flex">
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                  Front-end Proficiencies
                </div>
                <a href="#">Flexbox, Media Queries and CSS variables</a>
                <div className="grid grid-cols-2 bg-center gap-4 p-5"></div>
                </div>
                <ul className="skills">
                <li>* HTML</li>
                <li>* CSS</li>
                <li>* JavaScript</li>
                <li>* JQuery</li>
                <li>* Responsive design</li>
                <li>* React</li>
                <li>* Bootstrap</li>
                 </ul>
               </div>
              </div>
            </div>
          </div>
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
            <div className="md:flex">
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                  Coding Quiz Challenge
                </div>
                <a href="#">Web APIs and JavaScript</a>
                <p className="mt-2 text-slate-500">
                  Coding assessment with a combination of multiple-choice
                  questions
                </p>
              </div>
            </div>
    )  
}
