const Projects = () => {
  return (
    <div className="mt-12 mx-auto max-w-7xl">
      <h2 className=" text-shade4 tracking-widest mb-8">
        <i className="fa-solid fa-code "></i> PROJECTS
      </h2>
      <ul className="mb-20 text-shade4/90">
        <a className="hover:text-shade5  transition group" href="#">
          <li className="border-b border-shade3 hover:border-shade5 py-16 font-bold text-4xl w-full relative transition-all group-hover:px-2">
            Project 1 <i className="fa-solid fa-arrow-up-right-from-square absolute top-8 right-8 group-hover:-translate-x-2 transition"></i>
          </li>
        </a>
        <a className="hover:text-shade4 transition group" href="#">
          <li className="border-b border-shade3 hover:border-shade5 py-16 font-bold text-4xl w-full relative transition-all group-hover:px-2">
            Project 2 <i className="fa-solid fa-arrow-up-right-from-square absolute top-8 right-8 group-hover:-translate-x-2 transition"></i>
          </li>
        </a>
        <a className="hover:text-shade4 transition group" href="#">
          <li className="border-b border-shade3 py-16 font-bold hover:border-shade5  text-4xl w-full relative transition-all group-hover:px-2">
            Project 3 <i className="fa-solid fa-arrow-up-right-from-square absolute top-8 right-8 group-hover:-translate-x-2 transition"></i>
          </li>
        </a>
        <a className="hover:text-shade4 transition group" href="#">
          <li className="border-b border-shade3 py-16 font-bold hover:border-shade5 text-4xl w-full relative transition-all group-hover:px-2">
            Project 4 <i className="fa-solid fa-arrow-up-right-from-square absolute top-8 right-8 group-hover:-translate-x-2 transition"></i>
          </li>
        </a>
      </ul>
    </div>
  );
};

export default Projects;
