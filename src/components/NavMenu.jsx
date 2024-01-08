import logo from "../assets/logo.png";
import { motion } from "framer-motion";

const NavMenu = ({ toggleMenu }) => {
  const links = [
    { title: "Home", href: "#", num: "01" },
    { title: "Projects", href: "#", num: "02" },
    { title: "About", href: "#", num: "03" },
    { title: "Blog", href: "#", num: "04" },
    { title: "Contact", href: "#", num: "05" },
  ];

  const menuVariant = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 0, 0.36, 1],
      },
    },
  };

  const NavLinks = {
    initial: {
      opacity: 0,
      y: -400,
      transition: {
        duration: 0.5,
      },
    },
    open: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.1 * index,
      },
    }),
    exit: (index) => ({
      opacity: 0,
      y: -400,
      transition: {
        duration: 1.5,
        delay: 0.1 * index,
        direction: -1,
      },
    }),
  };
  

  return (
    <>
      <motion.div
        variants={menuVariant}
        initial="initial"
        animate="animate"
        exit="exit"
        className="fixed left-0 top-0 w-full origin-top h-screen bg-accent1  p-4"
      >
        <div className="flex h-full flex-col max-w-7xl mx-auto">
          <div className="flex justify-between  overflow-hidden">
            <motion.div
              variants={NavLinks}
              initial="initial"
              animate="open"
              exit="exit"
              className="h-24 p-2"
            >
              <img className="h-full" src={logo} alt="Logo" />
            </motion.div>
            <motion.div
            variants={NavLinks}
            initial="initial"
            animate="open"
            exit="exit"
              onClick={toggleMenu}
              className="cursor-pointer h-24 w-24 flex flex-col justify-center items-center"
            >
              <svg width="70" height="100" viewBox="0 0 100 100">
                <line
                  x1="0"
                  y1="0"
                  x2="100"
                  y2="100"
                  style={{ stroke: "#0A0A0A", strokeWidth: 3 }}
                />
                <line
                  x1="0"
                  y1="100"
                  x2="100"
                  y2="0"
                  style={{ stroke: "#0A0A0A", strokeWidth: 3 }}
                />
              </svg>
            </motion.div>
          </div>
          {/* Nav Links */}
          <div className="text-6xl md:text-7xl font-bold mt-8">
            <ul className="flex flex-col justify-center ">
              {links.map((link, i) => {
                return (
                  <ul onClick={toggleMenu} className="overflow-hidden " key={i}>
                    <motion.li
                      variants={NavLinks}
                      initial="initial"
                      animate="open"
                      exit="exit"
                      className="mb-6 pb-2 border-x pl-2"
                      custom={i}
                    >
                      <a href="#">
                        <span className="font-extralight text-lg text-shade3 relative bottom-9">
                          {link.num}
                        </span>
                        {link.title}
                      </a>
                    </motion.li>
                  </ul>
                );
              })}
            </ul>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default NavMenu;
