import { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="h-28 border border-test text-shade4 ">
      <nav className="px-4 flex items-center justify-between max-w-7xl mx-auto">
        <div className="h-28" >
          <img className="h-full" src={logo} alt="Logo" />
        </div>
        <ul className={`${isOpen ? "flex" : "hidden"} gap-12 flex-col fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-5xl // md:flex-row md:static md:text-2xl md:-translate-y-0 md:-translate-x-0 md:flex`}>
          <li onClick={toggleMenu} className="hover:text-shade5 transition"><a href="#home">Home</a></li>
          <li onClick={toggleMenu} className="hover:text-shade5 transition"><a href="#project">Project</a></li>
          <li onClick={toggleMenu} className="hover:text-shade5 transition"><a href="#about">About</a></li>
          <li onClick={toggleMenu} className="hover:text-shade5 transition"><a href="#blog">Blog</a></li>
        </ul>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-shade5 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
          </div>
      </nav>
    </header>
  );
};

export default Navbar;
