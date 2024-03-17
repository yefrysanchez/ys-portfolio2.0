// import img from "../assets/images/"

import { useState } from "react";
import Modal from "./Modal";

const Projects = () => {
  const projects = [
    {
      title: "Project C1",
      src: "image1.avif",
      color: "#000000",
    },
    {
      title: "Project C2",
      src: "image2.avif",
      color: "#8C8C8C",
    },
    {
      title: "Project C3",
      src: "image3.avif",
      color: "#EFE803",
    },
    {
      title: "Project C4",
      src: "image4.avif",
      color: "#706D63",
    },
  ];

  const [modal, setmodal] = useState({ active: false, index: 0 });

  return (
    <div className="mt-12 mx-auto max-w-7xl">
      <h2 className=" text-shade4 tracking-widest mb-8">
        <i className="fa-solid fa-code "></i> PROJECTS
      </h2>
      <ul className=" mb-20 text-shade4/90 relative">
        {projects.map((project, i) => (
          <a
            onMouseEnter={() => setmodal({ active: true, index: i })}
            onMouseLeave={() => setmodal({ active: false, index: i })}
            key={i}
            className="hover:text-shade5  transition group"
            href="#"
          >
            <li className="border-b border-shade3 hover:border-shade5 py-16 font-bold text-4xl w-full relative transition-all group-hover:px-2">
              {project.title}
              <i className="fa-solid fa-arrow-up-right-from-square absolute top-8 right-8 group-hover:-translate-x-2 transition"></i>
            </li>
          </a>
        ))}
       <Modal modal={modal} projects={projects} />
      </ul> 
    </div>
  );
};

export default Projects;
