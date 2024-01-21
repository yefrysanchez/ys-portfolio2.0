const ProjectTitle = () => {
  return (
    <div>
      <div className="flex gap-1 group pt-10 mb-8 ">
        <svg
          className="group-hover:scale-110 transition duration-300 "
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m12 19-7-7 7-7" />
          <path d="M19 12H5" />
        </svg>
        <a
          className="font-bold group-hover:translate-x-1 transition duration-300"
          href=""
        >
          Back to projects
        </a>
      </div>
      <div>
        <div>
          <h1 className="font-bold text-5xl lg:text-7xl mb-4">Title</h1>
          <p className="text-shade3 text-lg opacity-85">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            quam, dolores voluptatibus quibusdam nulla repellat illum earum
            maiores culpa vel repudiandae deleniti fugit? Corporis, fugit.
          </p>
        </div>
      
      </div>
    </div>
  );
};

export default ProjectTitle;
