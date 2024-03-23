import BackBtn from "./BackBtn";

const ProjectTitle = ({data}) => {
  return (
    <div>
      <BackBtn title={"Back to Home Page"} link={"www"}/>
      <div className="lg:flex justify-between text-shade5 ">
        <div className="lg:w-[50%] mb-8 lg:mb-0">
          <h1 className="font-bold  text-5xl lg:text-7xl mb-4">{data.title}</h1>
          <p className="text-shade4 text-lg opacity-85">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            quam, dolores voluptatibus quibusdam nulla repellat illum earum
            maiores culpa vel repudiandae deleniti fugit? Corporis, fugit.
          </p>
        </div>
        <div className="lg:w-[30%]">
          <ul className="">
            <li className="border-b py-4 border-shade4/70 font-bold flex">UI.UX <span className="font-extralight text-shade4 ml-auto">Yefry Sanchez</span></li>
            <li className="border-b py-4 border-shade4/70 font-bold flex">Date: <span className="font-extralight text-shade4 ml-auto">January 2024</span></li>
            <li className="border-b py-4 border-shade4/70 font-bold flex">Live Preview <span className="font-extralight text-shade4 ml-auto cursor-pointer">www.tumadre.com</span></li>
          </ul>
        </div>
      
      </div>
    </div>
  );
};

export default ProjectTitle;
