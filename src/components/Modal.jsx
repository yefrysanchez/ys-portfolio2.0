import { motion } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "50%", borderRadius: 100 },
  open: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    borderRadius: 0,
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    borderRadius: 100,
    transition: { duration: 0.6, ease: [0.36, 0, 0.67, 0] },
  },
};

const Modal = ({ modal, projects }) => {
  const { active, index } = modal;
  const container = useRef(null);

  useEffect(() => {
    const movecontainerX = gsap.quickTo(container.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const movecontainerY = gsap.quickTo(container.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      movecontainerX(clientX);
      movecontainerY(clientY);
      console.log(clientX, clientY);
    });
  }, []);

  return (
    <>
      <motion.div
        ref={container}
        variants={scaleAnimation}
        animate={active ? "open" : "closed"}
        className="fixed lg:h-[300px] lg:w-[400px] flex items-center justify-center overflow-hidden pointer-events-none"
      >
        <div
          style={{ top: index * -100 + "%" }}
          className="w-full h-full absolute transition-all ease-[cubic-bezier(0.76,0,0.24,1)]"
        >
          {projects.map((project, i) => (
            <div
              style={{ backgroundColor: project.color }}
              className="relative  h-full flex items-center justify-center"
              key={i}
            >
              <img
                className="h-2/3 w-2/3 object-cover"
                src={`../src/assets/images/${project.src}`}
                alt="project img"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Modal;
