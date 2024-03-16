import nahid from '../../assets/Frame.svg'
import reatangle from '../../assets/Rectangle 1 (1).png'
const Navber = () => {
    return (
        <header className="container mx-auto mt-10">
            <div class="navbar bg-base-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <a>Home</a>
                            <a>Recipes</a>
                            <a>About</a>
                            <a>Search</a>

                        </ul>
                    </div>
                    <a class="btn btn-ghost text-3xl font-semibold">Recipe Calories</a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal px-1 gap-8">
                        <a>Home</a>
                        <a>Recipes</a>
                        <a>About</a>
                        <a>Search</a>
                    </ul>
                </div>
                <div class="navbar-end">
                    <label class="input input-bordered flex items-center rounded-full gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" /></svg>
                        <input type="text" class="grow" placeholder="Search" />
                        
                    </label>
                    <a class="btn rounded-full ml-3 bg-[#0be58a]"><img src={nahid} alt="" /></a>
                </div>
            </div>
            {/* navber  */}
            <div className='mt-6 relative'>
                <img className='w-full' src={reatangle} alt="" />
                <div className='absolute  w-full h-full top-0 flex flex-col justify-center items-center gap-6'>
                  <h1 className='text-5xl text-center text-white'>Discover an exceptional cooking class <br /> tailored for you!</h1>
                  <p className=' mt-3 text-white text-center'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br /> problems to become an exceptionally well world-class Programmer.</p>
                  <div className='flex gap-6 justify-center mt-7'>
                  <button class="btn btn-outline bg-[#0be58a] rounded-full ">Explore Now</button>
                  <button class="btn btn-outline text-white rounded-full">Our Feedback</button>
                    </div>  
                </div>
            </div>
            <div className='text-black text-center mt-16'>
                <h1 className='text-3xl font-bold mb-3'>Our Recipes</h1>
               <p>Peanut butter and banana sandwich: Spread peanut butter on bread, add 
               <br /> sliced banana, and enjoy</p>
            </div>

        </header>
    );
};

export default Navber;