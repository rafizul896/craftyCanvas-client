import PropTypes from 'prop-types';
import { BiDollar } from 'react-icons/bi';
import { IoPricetagsOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const SubCraftItem = ({ craftItem }) => {
    const { _id, item_name, subcategory_Name, processing_time, short_description, price, rating, image } = craftItem;

    return (
        <div className='rounded-lg p-2 md:p-5 flex flex-col items-cente justify-cente gap-3 border border-red-600'>
            <div className='h-[250px]'>
                <img className='h-full w-full object-cover' src={image} alt="" />
            </div>
            <div className='fle justify-between'>
                <div className='space-y-1'>
                    <h3 className='font-semibold text-lg'>{item_name}</h3>
                    <div className="flex items-center gap-3 font-semibold">
                        <IoPricetagsOutline />
                        <p>
                            {subcategory_Name}
                        </p>
                    </div>
                    <p>{short_description.slice(0, 120)}...</p>

                    <div className="flex items-center text-lg font-semibold">
                        price : <BiDollar />
                        <span className="font-normal">{price}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="rating rating-md">
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        {rating} <span>rating</span>
                    </div>
                    {/* <p className="font-semibold">customization : <span className="font-normal">{customization}</span></p> */}
                    <p className="font-semibold">processing_time : <span className="font-normal">{processing_time}</span></p>
                </div>
                <div className="flex flex-col gap-4">
                    <Link to={`/craftDetailsPage/${_id}`}>
                        <button className="mt-4 btn btn-secondary w-full rounded-full">View Details”</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

SubCraftItem.propTypes = {
    craftItem: PropTypes.object
}

export default SubCraftItem;