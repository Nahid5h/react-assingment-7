
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks}) => {
    return (
        <div className="ml-8 w-1/3 shadow-lg p-10 h-auto space-y-3">
            <h1 className="text-3xl font-bold text-center mb-5">Want to cook:{bookmarks.length} </h1>
            <hr />
            <div className='text-xl font-semibold flex gap-14 my-5 ml-7'>
               <h1>Name</h1> 
               <h1>Time</h1> 
               <h1>Calories</h1> 
            </div>
            {
                bookmarks.map((bookmark,index) => <Bookmark key={bookmark.id} index={index} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes={
    bookmarks:PropTypes.array
}
export default Bookmarks;