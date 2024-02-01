import BackBtn from "../components/BackBtn";
import BlogLink from "../components/BlogLink";
import Contact from "../components/Contact";

const BlogsListPage = () => {
  return (
    <div className="">
      <BackBtn title={"Back to Home"} link={"www"} />
      <div className="max-w-lg mb-12">
        <h1 className="text-6xl md:text-7xl lg:text-[90px] font-bold text-shade2/90 mb-4">
          Journal
        </h1>
        <p className=" text-lg text-shade3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
          saepe. Itaque ipsam quaerat perspiciatis quibusdam rerum esse tempora
          praesentium sint!
        </p>
      </div>

      <div className="md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-4 lg:gap-8 mb-12">
        <BlogLink />
        <BlogLink />
        <BlogLink />
      </div>

      <Contact />
    </div>
  );
};

export default BlogsListPage;
