import { Link, useParams } from "react-router-dom";
import Contact from "../components/Contact";
import ProjectTitle from "../components/ProjectTitle";
import { ProjectsData } from "../data/Projects";
import img from "../assets/images/image1.avif";

const ProjectPage = () => {
  const url = useParams();

  const data = ProjectsData.find(
    (e) => e.title.replace(" ", "") === url.projectId
  );
  console.log(data.src);
  return (
    <div className="px-4 mt-20 h-full">
      <ProjectTitle data={data} />
      <div className="mt-8">
        <div className="bg-accent2 h-[350px] md:h-[600px] lg:h-[750px]  rounded-3xl relative">
          <img
            className="h-full w-full object-cover"
            src={`../src/assets/images/${data.src}`}
            alt="Project image"
          />
        </div>
        <div className="mt-8 ">
          <h2 className="text-shade5 font-bold text-4xl mb-8 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, iusto
            vero autem sunt ab modi!
          </h2>
          <p className="text-shade4 text-lg opacity-85">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
            sapiente harum dolore repudiandae atque, nemo eos cum voluptatem
            minus numquam ipsum quae quisquam excepturi quasi molestiae dicta
            sit, quia sequi ullam consectetur optio enim nam?
          </p>
        </div>
        <div className="mt-12 flex flex-col md:flex-row gap-5 lg:gap-8 mb-12 text-[130px]">
          <div className="bg-accent2 h-[350px] md:w-1/2 w-full rounded-3xl flex justify-center items-center">
            <Link className="" to={"#"}>
              <i className="fa-brands fa-square-github"></i>
            </Link>
          </div>
          <div className="bg-accent2 h-[350px] md:w-1/2 rounded-3xl flex justify-center items-center">
            <Link>
              <i className="fa-solid fa-up-right-from-square"></i>
            </Link>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default ProjectPage;
