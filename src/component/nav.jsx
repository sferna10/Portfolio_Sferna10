const nav = () => {
  return (
    <>
      <div className="flex items-center justify-between p-10 lg:flex-row">
        <div>
          <a
            href="#hero"
            className="text-white font-mono text-3xl tracking-wider flex items-center"
          >
            Professional Portfolio
          </a>
        </div>
        <div className="space-x-4">
          <a
            href="#"
            className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl"
          >
            Home
          </a>
          <a
            href="#skills"
            className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl"
          >
            Projects
          </a>
          <a
            href="#Contact"
            className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl"
          >
            Contact
            </a>
          <a
            href="#"
            className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl"
          >
          </a>
        </div>
      </div>
    </>
  )
}

export default nav;
