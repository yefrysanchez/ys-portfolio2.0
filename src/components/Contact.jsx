const Contact = () => {
  return (
    <div className="bg-shade2 rounded-3xl h-96 text-center mb-12 text-shade4 flex justify-center items-center">
      <div>
        <h2 className="text-5xl lg:text-[86px] font-bold mb-8">Let's Talk!</h2>
        <p className="opacity-65 max-w-[400px] mb-6">
          Feel free to reach out. I'm here to help turn your ideas into amazing
          digital realities. Looking forward to hearing from you soon!
        </p>
        <div>
          <div>
            <a
              className="bg-shade1 p-3 border border-shade3 hover:border-accent1 transition rounded-lg mr-2"
              href=""
            >
              <i className="fa-solid fa-envelope mr-1"></i> yefrymsp@gmail.com
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="bg-shade1 p-3 border border-shade3 hover:border-accent1 transition rounded-lg mr-2"
              href="https://www.linkedin.com/in/yefrysanchez/"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
            target="_blank"
            rel="noopener noreferrer"
              className="bg-shade1 p-3 border border-shade3 hover:border-accent1 transition rounded-lg"
              href="https://github.com/yefrysanchez"
            >
              <i className="fa-brands fa-square-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
