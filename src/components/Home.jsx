import React, { useEffect, useState } from "react";
import axios from "axios";
import "./../App.css";

function Home() {
  const [blogs, setBlogs] = useState([]);

  
  const fetchBlogs = () => {
    axios
      .get("http://localhost:3009/get")
      .then((res) => setBlogs(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  
  const deleteBlog = (id) => {
    axios
      .delete(`http://localhost:3009/delete/${id}`)
      .then(() => {
        fetchBlogs(); 
      })
      .catch((err) => console.log(err));
  };

  
  const updateBlog = (id) => {
    axios
      .put(`http://localhost:3009/update/${id}`, {
        
      })
      .then(() => {
        fetchBlogs(); 
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="home-container">
      {blogs.map((blog) => (
        <div className="card" key={blog._id}>
          <img src={blog.img_url} alt="blog" />
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>

          <div className="btn-group">
            <button
              className="delete-btn"
              onClick={() => deleteBlog(blog._id)}
            >
              DELETE
            </button>

            <button
              className="update-btn"
              onClick={() => updateBlog(blog._id)}
            >
              UPDATE
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;