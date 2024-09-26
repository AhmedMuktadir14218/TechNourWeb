 

const Navber = () => {
    return (
        <div>
        <header className="bg-transparent" >
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12">
        <a className="block text-teal-600" >
          <span className="sr-only">Home</span>
          <p>TechNour</p>
        </a>
      </div>

      <div className="hidden md:block">
        <nav aria-label="Global">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" > About </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" > Careers </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" > History </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" > Services </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" > Projects </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" > Blog </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <a
            className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
            
          >
            Login
          </a>

          <div className="hidden sm:flex">
            <a
              className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
              
            >
              Register
            </a>
          </div>
        </div>

        <div className="block md:hidden">
          <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
           <p>TechNour</p>
               
          </button>
        </div>
      </div>
    </div>
  </div>
</header>            
        </div>
    );
};

export default Navber;