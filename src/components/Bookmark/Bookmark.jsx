import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
    
    const {recipe_name,preparing_time_minutes,calories ,}=bookmark;
    return (
        <div className='flex justify-between '>
         
            <h1 className='text-xl w-16'>  {recipe_name}</h1>
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