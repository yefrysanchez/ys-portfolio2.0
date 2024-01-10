const About = () => {
  return (
    <div className=" max-w-7xl mx-auto mb-8">
      <h2 className="text-5xl lg:text-[86px] font-bold mb-8 lg:mb-12 leading-none">
        Meet the Developer Behind the Code.
      </h2>
      <div className="overflow-hidden rounded-3xl mb-8 lg:mb-12">
        <img
          className="h-ull w-full object-cover"
          src="https://www.hdwallpapers.in/download/bart_simpson_hd_the_simpsons-HD.jpg"
          alt="about profile"
        />
      </div>
      <div className="overflow-hidden rounded-xl bg-shade4 p-8 font-bold text-3xl ">
        <p>
          I was born in Dominican Republic and moved to New York in 2011, went
          to school in The Bronx, NY. I love Baseball, Videogames, Produce music
          and all about Computers from hardware to software. I am really
          passionate about technology in general.
        </p>
      </div>
    </div>
  );
};

export default About;
