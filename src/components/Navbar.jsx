import { useState } from "react";
import logo from "../assets/logo.png";
import NavMenu from "./NavMenu";
import { AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="h-20 border-b border-shade1 w-full fixed top-0 left-0 bg-shade2 z-40">
      <nav className="px-4 h-full flex items-center justify-between max-w-7xl mx-auto">
        <div className="h-full py-2">
          <img className="h-full" src={logo} alt="Logo" />
        </div>
        <div
          onClick={toggleMenu}
          className="h-10 w-24 py-2 flex flex-col justify-between cursor-pointer"
        >
          <div className="bg-shade5 h-[1px] w-full rounded-full"></div>
          <div className="bg-shade5 h-[1px] w-full rounded-full"></div>
          <div className="bg-shade5 h-[1px] w-full rounded-full"></div>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen ? <NavMenu toggleMenu={toggleMenu} /> : ""}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
