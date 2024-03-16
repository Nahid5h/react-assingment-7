import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = () => {
    const [blogs,setBlogs]= useState([]);

    useEffect(()=>{
        fetch('Blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])

    return (
        <div className="grid grid-cols-2 gap-5 w-2/3 ">
          {
            blogs.map((blog,id)=><Blog key={id} blog={blog}></Blog>)
          }
        </div>
    );
};

export default Blogs;