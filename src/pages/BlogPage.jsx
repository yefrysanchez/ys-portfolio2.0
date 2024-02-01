import BackBtn from "../components/BackBtn";
import BlogContent from "../components/BlogContent";
import Contact from "../components/Contact";

const BlogPage = () => {
  return (
    <div className="mt-36 px-20">
      <BackBtn title={"Back to title"} link={"www"} />
      <div className="mb-12"> 
        <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </h1>
        <div className="h-[350px] md:h-[600px] lg:h-[600px] rounded-3xl overflow-hidden mb-12">
          <img
            className="h-full w-full object-cover"
            src="https://wallpapercave.com/wp/wp5422452.jpg"
            alt="blog img"
          />
        </div>
        <BlogContent
          title={
            "Lorem ipsum dolor sit amet consectetur adipisicing.Lorem ipsum dolor sit amet consectetur adipisicing."
          }
          para={
            "Lorem ipsum dolor sit amet consectetur adipisicing.Lorem ipsum dolor sit amet consectetur adipisicing.Lorem ipsum dolor sit amet consectetur adipisicing.Lorem ipsum dolor sit amet consectetur adipisicing.Lorem ipsum dolor sit amet consectetur adipisicing.Lorem ipsum dolor sit amet consectetur adipisicing.Lorem ipsum dolor sit amet consectetur adipisicing.Lorem ipsum dolor sit amet consectetur adipisicing."
          }
        />
      </div>
      <Contact />
    </div>
  );
};

export default BlogPage;
