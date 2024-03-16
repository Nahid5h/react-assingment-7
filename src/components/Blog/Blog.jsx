
import victor from '../../assets/Frame (2).svg'
import fraim from '../../assets/Frame (1).svg'
import PropTypes from 'prop-types'; 
const Blog = ({blog,handleAddToBookmark}) => {
    const {recipe_img,recipe_name,short_description,ingredients,preparing_time_minutes,calories}  =blog;

   
    return (
        <div className='w-[400px] h-[700px] shadow-lg  p-8 rounded-3xl space-y-2 mb-7'>
        <img className='w-[331px] h-[200px]' src={recipe_img} alt="" />
         <h1 className='text-2xl font-semibold'>{recipe_name}</h1>
        
         <p>{short_description}</p>
         <hr />
         <h3 className='text-xl font-semibold'>Ingradiants: {ingredients.length}</h3>
         <p>- {ingredients[0]}</p>
         <p>- {ingredients[1]}</p>
         <p>- {ingredients[2]}</p>
         <p>- {ingredients[3]}</p>
         <p>- {ingredients[4]}</p>
         <p>- {ingredients[5]}</p>


         <hr />
         <div className='flex gap-5'>
            <div className='flex gap-2'>
                <img src={victor} alt="" />
                <p>{preparing_time_minutes} minutes</p>
            </div>
            <div className='flex'>
                <img src={fraim} alt="" />
                <p>{calories}</p>
            </div>
         </div>
         <button
         onClick={()=>handleAddToBookmark(blog)}
         className='btn bg-[#02b76c] rounded-full text-xl font-bold'>Want to Cook</button>
         
        </div>

    );
};

Blog.propTypes={
    blog:PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func
}
export default Blog;