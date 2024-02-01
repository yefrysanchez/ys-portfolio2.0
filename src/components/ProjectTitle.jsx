import BackBtn from "./BackBtn";

const ProjectTitle = () => {
  return (
    <div>
      <BackBtn title={"Back to title"} link={"www"}/>
      <div className="lg:flex justify-between">
        <div className="lg:w-[50%] mb-8 lg:mb-0">
          <h1 className="font-bold text-5xl lg:text-7xl mb-4">Title</h1>
          <p className="text-shade3 text-lg opacity-85">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            quam, dolores voluptatibus quibusdam nulla repellat illum earum
            maiores culpa vel repudiandae deleniti fugit? Corporis, fugit.
          </p>
        </div>
        <div className="lg:w-[30%]">
          <ul className="">
            <li className="border-b py-4 border-shade3/20 font-bold flex">UI.UX <span className="font-extralight text-shade3 ml-auto">Yefry Sanchez</span></li>
            <li className="border-b py-4 border-shade3/20 font-bold flex">Date: <span className="font-extralight text-shade3 ml-auto">January 2024</span></li>
            <li className="border-b py-4 border-shade3/20 font-bold flex">Live Preview <span className="font-extralight text-shade3 ml-auto cursor-pointer">www.tumadre.com</span></li>
          </ul>
        </div>
      
      </div>
    </div>
  );
};

export default ProjectTitle;
