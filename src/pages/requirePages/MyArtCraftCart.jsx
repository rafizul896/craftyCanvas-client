import PropTypes from 'prop-types';
import { useContext } from 'react';
import { BiDollar } from 'react-icons/bi';
import { MdDelete, MdModeEdit } from 'react-icons/md';
import { TiEye } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const MyArtCraftCart = ({ myCraftItem }) => {
    const { user } = useContext(AuthContext);
    const { _id, item_name, stockStatus, customization, price, rating, image } = myCraftItem;

    const handleDelete = id => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/myCraftItems/${user?.email}/${_id}`,{
                    method: "DELETE"
                })
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }
    return (
        <div className='rounded-lg p-2 md:p-5 flex flex-col items-cente justify-cente gap-3 border border-red-600'>
            <div className='h-[200px] '>
                <img className='h-full w-full object-cover' src={image} alt="" />
            </div>
            <div className='flex justify-between'>
                <div className='space-y-1'>
                    <h3 className='font-semibold text-lg'>{item_name}</h3>
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
                    <p className="font-semibold">customization : <span className="font-normal">{customization}</span></p>
                    <p className="font-semibold">stock_status : <span className="font-normal">{stockStatus}</span></p>
                </div>
                <div className="flex flex-col gap-4">
                    <Link to={`/craftDetailsPage/${_id}`}><button className="p-2 text-xl bg-[#D2B48C] text-white rounded-md"><TiEye /></button></Link>
                    <Link to={`/myCraftItems/${user?.email}/${_id}`}><button className="p-2 text-xl bg-[#3C393B] text-white rounded-md"><MdModeEdit /></button></Link>
                    <button onClick={() => handleDelete(_id)} className="p-2 text-xl bg-[#EA4744] text-white rounded-md"><MdDelete /></button>
                </div>
            </div>
        </div>
    );
};

MyArtCraftCart.propTypes = {
    myCraftItem: PropTypes.object
}

export default MyArtCraftCart;