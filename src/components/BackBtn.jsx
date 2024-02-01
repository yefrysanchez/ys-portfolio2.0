

const BackBtn = ({title, link}) => {
  return (
    <div className="flex gap-1 group mt-32 mb-8 w-fit h-fit ">
        <svg
          className="group-hover:scale-110 transition duration-300 "
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m12 19-7-7 7-7" />
          <path d="M19 12H5" />
        </svg>
        <a
          className="font-bold tracking-wide group-hover:translate-x-1 transition duration-300 cursor-pointer"
          href={link}
        >
          {title}
        </a>
      </div>
  )
}

export default BackBtn