const Gridhome = () => {
  return (
    <div className="mt-12 h-[430px] grid gap-4 md:gap-8 grid-cols-2 grid-rows-4 md:grid-cols-4 md:grid-rows-2">
      <div className="w-full h-full rounded-xl md:rounded-3xl overflow-hidden row-span-2">
        <video
          autoPlay
          loop
          className="h-full w-full object-cover"
          src="https://framerusercontent.com/assets/a7oLlvkswlykX0srOqFY3gx1s.mp4"
        ></video>
      </div>
      <div className="rounded-xl md:rounded-3xl overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src="https://www.wallpaperup.com/uploads/wallpapers/2014/11/22/523974/4c7f9046b7d443e0f531758996df37cc.jpg"
          alt="img"
        />
      </div>
      <div className="rounded-xl md:rounded-3xl overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src="https://www.wallpaperup.com/uploads/wallpapers/2014/11/22/523974/4c7f9046b7d443e0f531758996df37cc.jpg"
          alt="img"
        />
      </div>
      <div className="rounded-xl md:rounded-3xl overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src="https://www.wallpaperup.com/uploads/wallpapers/2014/11/22/523974/4c7f9046b7d443e0f531758996df37cc.jpg"
          alt="img"
        />
      </div>
      <div className="rounded-xl md:rounded-3xl overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src="https://www.wallpaperup.com/uploads/wallpapers/2014/11/22/523974/4c7f9046b7d443e0f531758996df37cc.jpg"
          alt="img"
        />
      </div>
      <div className="rounded-xl md:rounded-3xl overflow-hidden row-span-2 row-start-3 col-start-2 md:row-start-1 md:col-start-3">
        <img
          className="h-full w-full object-cover"
          src="https://www.wallpaperup.com/uploads/wallpapers/2014/11/22/523974/4c7f9046b7d443e0f531758996df37cc.jpg"
          alt="img"
        />
      </div>
    </div>
  );
};

export default Gridhome;
