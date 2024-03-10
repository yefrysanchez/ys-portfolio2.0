export const Hero = () => {
  return (
    <header className="h-screen text-shade4 font-semi flex flex-col justify-center items-center text-[70px] md:text-[100px] lg:text-[15vh] leading-none">
      <div className="lg:flex items-center gap-4">
        <p className="">
          <span className="font-semibold">Y</span>EFR
          <span className="font-semibold">Y</span>
        </p>
        <div className="h-20 lg:h-28 overflow-hidden lg:w-52 rounded-full">
          <img
          className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="pic"
          />{" "}
        </div>
      </div>
      <div className="lg:flex lg:flex-row-reverse items-center gap-4">
        <p className="">
          <span className="font-semibold">S</span>ANCHE
          <span className="font-semibold">Z</span>
        </p>
        <div className="h-20 lg:h-28  overflow-hidden lg:w-52 rounded-full">
          <img
          className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="pic"
          />{" "}
        </div>
      </div>
      <div className="flex flex-col  items-center">
        <p className="">
          <span className="font-semibold">W</span>EB
        </p>
        <p className="">
          <span className="font-semibold">D</span>EVELOPE
          <span className="font-semibold border-4 rounded-xl p-1">R</span>
        </p>
        
      </div>
    </header>
  );
};
