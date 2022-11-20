import { useState, useEffect } from "react";
import AddBlog from "./components/AddBlog";
import BlogCard from "./components/BlogCard";

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = () => {
    fetch("http://localhost:3000/blogs")
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setBlogs(response);
      });
  };

  const postBlog = () => {
    
  }

  return (
    <div className="">
      <AddBlog/>
      <div className="flex justify-center m-2 gap-2">
        {blogs.map((item) => (
          <BlogCard blog={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
