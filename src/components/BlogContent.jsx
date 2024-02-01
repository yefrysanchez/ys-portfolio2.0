

const BlogContent = ({title, para}) => {
  return (
    <div>
          <h2 className="font-bold text-4xl mb-8">
            {title}
          </h2>
          <p className="text-shade3 leading-8 text-xl">
            {para}
          </p>
        </div>
  )
}

export default BlogContent