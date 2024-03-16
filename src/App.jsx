
import './App.css'

import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Navber from './components/Navber/Navber'

function App() {
  

  return (
    <>

     <Navber></Navber>
     <div className='flex container mx-auto mt-10'>
     <Blogs></Blogs>
  <Bookmarks></Bookmarks>
     </div>
    
    </>
  )
}

export default App
