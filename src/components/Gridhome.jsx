import image1 from "../assets/images/image1.avif";
import image2 from "../assets/images/image2.avif";
import image3 from "../assets/images/image3.avif";
import image4 from "../assets/images/image4.avif";

const Gridhome = () => {
  return (
    <div className="mt-12 h-[350px] md:h-[550px] lg:h-[650px] grid gap-2 grid-cols-5 grid-rows-4">
      <div className="rounded-xl md:rounded-3xl overflow-hidden col-span-5">
        <img className="h-full w-full object-cover" src={image1} alt="img" />
      </div>
      <div className="rounded-xl md:rounded-3xl overflow-hidden col-span-3 md:col-span-1">
        <img className="h-full w-full object-cover" src={image2} alt="img" />
      </div>
      <div className="rounded-xl md:rounded-3xl overflow-hidden col-span-2 md:col-span-4">
        <img className="h-full w-full object-cover" src={image3} alt="img" />
      </div>
      <div className="rounded-xl md:rounded-3xl overflow-hidden col-span-5">
        <img className="h-full w-full object-cover" src={image4} alt="img" />
      </div>
      <div className="rounded-xl md:rounded-3xl overflow-hidden col-span-2">
        <img className="h-full w-full object-cover" src={image3} alt="img" />
      </div>
      <div className="rounded-xl md:rounded-3xl overflow-hidden col-span-3">
        <img className="h-full w-full object-cover" src={image2} alt="img" />
      </div>
    </div>
  );
};

export default Gridhome;
