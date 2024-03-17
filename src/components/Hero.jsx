export const Hero = () => {
  return (
    <div className="h-screen text-shade4 flex flex-col justify-center items-center select-none">
      <p className="text-[20px] md:text-[40px] font-thin flex self-start 2xl:self-auto">
        Hello{"  "}
        <img
        className="hover:rotate-90 transition-all"
          src="https://assets-global.website-files.com/62dd44ff63a8786b269dc628/651ffedf99309414b4f56c5d_hand-waving%201.svg"
          alt=""
        />
        , I am
      </p>
      <h1 className="text-[80px] md:text-[160px]  italic leading-none ">
        Yefry Sanchez
      </h1>
      <p className="text-[6vh] font-thin self-end 2xl:self-auto leading-none lg:leading-normal">Web Developer</p>
    </div>
  );
};
``