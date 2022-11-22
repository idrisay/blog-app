const BlogCard = ({ blog }) => {
  return (
    <div className="border-[1px] border-red-200 p-2 w-full">
        <img src={blog.image_url} alt="" />
      <h1 className="text-3xl">{blog.title}</h1>
      <p className="text-gray-600">{blog.content}</p>
      <p>
        <span>{blog.author_name} </span>
        <span>{blog.author_lastname}</span>
      </p>

    </div>
  );
};

export default BlogCard;
