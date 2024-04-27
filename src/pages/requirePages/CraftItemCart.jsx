import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const CraftItemCart = ({ craftItem }) => {
    const { _id,image, item_name,
        short_description } = craftItem;
    return (
        <div className="border-2 p-4">
            <div className="h-[300px]">
                <img className="w-full h-full object-cover" src={image} alt="" />
            </div>
            <div className="py-4 space-y-2">
                <h3 className="text-xl font-medium">{item_name}</h3>
                <p>{short_description.slice(0, 120)}...</p>
                <Link to={`/allCraftItems/${_id}`}>
                    <button className="mt-4 btn btn-secondary w-full rounded-full">View Details”</button>
                </Link>
            </div>
        </div>
    );
};

CraftItemCart.propTypes = {
    craftItem: PropTypes.object
}

export default CraftItemCart;