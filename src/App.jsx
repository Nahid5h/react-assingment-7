
import { useState } from 'react'
import './App.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Navber from './components/Navber/Navber'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
function App() {

  const [bookmarks,setBookmarks]=useState([]);

  const handleAddToBookmark=blog=>{
    // const newBookmarks=[...bookmarks,blog];
    // setBookmarks(newBookmarks)
   
    const isExist =bookmarks.find(item =>item.recipe_id==blog.recipe_id);
  if(!isExist){
    const newBookmarks=[...bookmarks,blog];
  setBookmarks(newBookmarks)
  }else{
    toast.error('seat khali nai');
  }
 
  }
  
  

  return (
    <>

     <Navber></Navber>
     <div className='flex container mx-auto my-10 '>
     <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
  <Bookmarks bookmarks={bookmarks}></Bookmarks>
  
     </div>
     <ToastContainer />
    
    </>
  )
}

export default App
