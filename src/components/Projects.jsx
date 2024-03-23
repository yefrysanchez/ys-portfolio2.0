// import img from "../assets/images/"

import { useState } from "react";
import Modal from "./Modal";
import { Link } from "react-router-dom";
import { ProjectsData } from "../data/Projects";

const Projects = () => {
  
  const [modal, setmodal] = useState({ active: false, index: 0 });

  return (
    <div className="mt-12 mx-auto max-w-7xl">
      <h2 className=" text-shade4 tracking-widest mb-8">
        <i className="fa-solid fa-code "></i> PROJECTS
      </h2>
      <ul className=" mb-20 text-shade4/90 relative">
        {ProjectsData.map((project, i) => (
          <Link
          to={`/${project.title.replace(" ","")}`}
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
          </Link>
        ))}
       <Modal modal={modal} projects={ProjectsData} />
      </ul> 
    </div>
  );
};

export default Projects;
