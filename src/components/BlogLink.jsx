
const BlogLink = () => {
  return (
    <div className="w-full cursor-pointer group">
      <div className="h-[350px] w-full rounded-3xl overflow-hidden mb-4">
        <img
          className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
          src="https://www.workato.com/product-hub/wp-content/uploads/2020/12/workato-blog-JavaScript-20201208-bl-01.jpg"
          alt=""
        />
      </div>
      <p className="text-shade3 text-sm mb-4">Apr 8, 2022</p>
      <h1 className="text-3xl group-hover:opacity-80 font-bold text-shade2/90 mb-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </h1>
    </div>
  );
};

export default BlogLink;
