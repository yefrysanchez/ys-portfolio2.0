import About from "../components/About";
import Contact from "../components/Contact";
import Gridhome from "../components/Gridhome";
import HeaderTitle from "../components/HeaderTitle";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <div className="px-4 mt-32 max-w-7xl mx-auto">
     <HeaderTitle />
     <Gridhome />
     <Projects />
     <About />
     <Contact />
    </div>
  );
};

export default Home;
