import Contact from "../components/Contact";
import ProjectTitle from "../components/ProjectTitle";

const ProjectPage = () => {
  return (
    <div className="px-4 mt-20 h-full">
      <ProjectTitle />
      <div className="mt-8">
        <div className="bg-accent2 h-[350px] md:h-[600px] lg:h-[750px]  rounded-3xl relative">
          <a className="hover:opacity-75 transition" href=""><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="bg-shade3/30 rounded-md p-1 scale-150 absolute top-6 right-6"
          >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg></a>
        </div>
        <div className="mt-8 md:flex gap-4">
          <h2 className="font-bold text-4xl mb-8 md:w-1/2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, iusto
            vero autem sunt ab modi!
          </h2>
          <p className="text-shade3 text-lg md:w-1/2 opacity-85">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
            sapiente harum dolore repudiandae atque, nemo eos cum voluptatem
            minus numquam ipsum quae quisquam excepturi quasi molestiae dicta
            sit, quia sequi ullam consectetur optio enim nam?
          </p>
        </div>
        <div className="mt-12 flex flex-col md:flex-row gap-5 lg:gap-8 mb-12">
          <div className="bg-accent2 h-[350px] md:w-1/2 w-full rounded-3xl"></div>
          <div className="bg-accent2 h-[350px]  md:w-1/2 rounded-3xl"></div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default ProjectPage;
