import PropTypes from 'prop-types'

const Bookmark = ({bookmark,index }) => {
    
    const {recipe_name,preparing_time_minutes,calories ,}=bookmark;
    return (
        <div className='flex justify-between '>
            <h1>{index+1}</h1>
         
            <p className=' w-16'>  {recipe_name}</p>
            <p className=''>{preparing_time_minutes} minutes</p>
            <p>{calories}</p>
            <button className='btn bg-[#35f3a3] rounded-full'>Preparing</button>
        </div>
    );
};

Bookmark.propTypes={
    bookmark:PropTypes.object
}
export default Bookmark;