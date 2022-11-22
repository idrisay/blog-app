import { useState, useEffect } from "react";
import AddBlog from "./components/AddBlog";
import BlogCard from "./components/BlogCard";
import Drawer from "./components/Drawer";
import { checkBlogContent } from "./helpers/functions";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      'author_lastname' : e.target[3].value,
      'author_name' : e.target[2].value,
      'content' : e.target[1].value,
      'title' : e.target[0].value,
      'image_url' : e.target[4].value,
    }
    console.log(checkBlogContent(data))
    if(checkBlogContent(data)){

      fetch("http://localhost:3000/blogs", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      .then((response) => response.json)
      .then((res) => {
        getBlogs()
        setIsOpen(false)
      });
    }else{
      console.log('Butun alanlari')
    }

  };

  return (
    <div className="">
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <AddBlog handleSubmit={handleSubmit} />
      </Drawer>
      <div className="grid md:grid-cols-2 grid_cols-1 p-4 gap-4 max-w-7xl mx-auto">
        {blogs.map((item) => (
          <BlogCard blog={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
