import About from "../components/About";
import Contact from "../components/Contact";

import { Hero } from "../components/Hero";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <div className="md:px-4 h-full max-w-7xl mx-auto">
      <Hero />

      <Projects />

      <About />
      <Contact />
    </div>
  );
};

export default Home;
