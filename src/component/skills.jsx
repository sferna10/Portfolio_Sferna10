export default function Skills() {

  return (
 
    <div>
      <div className="bg-indigo-800 m-20 max-w-full">
        <div className="grid justify-items-center m-10">
          <h1 className="text-3xl text-white mt-10" id="skills">Skills</h1>
        </div>
      </div>
      {/* first row */}
      <div className="grid grid-cols-2 gap-4 p-5">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
          <div className="md:flex">
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
              <a href="#">Front-end Proficiencies</a>
              </div>
              <p className="mt-2 text-slate-500">
                 
              <ul className="Frontend">
              <li>* HTML</li>
              <li>* CSS</li>
              <li>* JavaScript</li>
              <li>* JQuery</li>
              <li>* Responsive design</li>
              <li>* React</li>
              <li>* Bootstrap</li>
            </ul>
                 
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
          <div className="md:flex">
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
              <a href="#">Back-end Proficiencies</a>
               </div>
              <p className="mt-2 text-slate-500">
                    
              <ul className="Frontend">
              <li>* APIs</li>
              <li>* Node</li>
              <li>* Express</li>
              <li>* JQuery</li>
              <li>* MySQL, Sequelize</li>
              <li>* MongoDB, Mongoose</li>
              <li>* Rest</li>
              <li>* GraphQL</li>
              <li>* Merk</li>
            </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>  
  )
}
