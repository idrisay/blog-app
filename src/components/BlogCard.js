import { useEffect, useState } from "react";

const BlogCard = ({ blog }) => {
  const [author, setAuthor] = useState({ id: 0, name: "", lastname: "" });

  useEffect(() => {
    fetch(`http://localhost:3000/users/${blog.author}`)
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setAuthor(response);
      });
  }, []);

  return (
    <div className="border-[1px] border-red-200 p-2">
      <h1 className="text-3xl">{blog.title}</h1>
      <p className="text-gray-600">{blog.content}</p>
      <p>
        <span>{author.name} </span>
        <span>{author.lastname}</span>
      </p>
    </div>
  );
};

export default BlogCard;
