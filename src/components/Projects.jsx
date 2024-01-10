const Projects = () => {
  return (
    <div className="mt-12 mx-auto max-w-7xl">
      <h2 className=" text-shade3 tracking-widest mb-8">
        <i className="fa-solid fa-code"></i> PROJECTS
      </h2>
      <ul className="mb-20 text-shade3">
        <a className="hover:text-shade1 transition group" href="#">
          <li className="border-b border-shade4 py-8 hover:bg-accent2  font-bold text-2xl w-full relative transition-all group-hover:px-2">
            Project 1 <i className="fa-solid fa-arrow-up-right-from-square absolute top-8 right-8 group-hover:-translate-x-2 transition"></i>
          </li>
        </a>
        <a className="hover:text-shade1 transition group" href="#">
          <li className="border-b border-shade4 py-8 hover:bg-accent1 font-bold text-2xl w-full relative transition-all group-hover:px-2">
            Project 2 <i className="fa-solid fa-arrow-up-right-from-square absolute top-8 right-8 group-hover:-translate-x-2 transition"></i>
          </li>
        </a>
        <a className="hover:text-shade1 transition group" href="#">
          <li className="border-b border-shade4 py-8 font-bold hover:bg-accent2 text-2xl w-full relative transition-all group-hover:px-2">
            Project 3 <i className="fa-solid fa-arrow-up-right-from-square absolute top-8 right-8 group-hover:-translate-x-2 transition"></i>
          </li>
        </a>
        <a className="hover:text-shade1 transition group" href="#">
          <li className="border-b border-shade4 py-8 font-bold hover:bg-accent1 text-2xl w-full relative transition-all group-hover:px-2">
            Project 4 <i className="fa-solid fa-arrow-up-right-from-square absolute top-8 right-8 group-hover:-translate-x-2 transition"></i>
          </li>
        </a>
      </ul>
    </div>
  );
};

export default Projects;
