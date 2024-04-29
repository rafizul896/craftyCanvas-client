import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CategoriesCart = ({ categorie }) => {
    const { _id,image, subcategory_Name } = categorie

    return (
        <Link to={`/allSubcategorys/${_id}`}>
            <div className='shadow-xl p-2 border'>
                <div className='h-[250px]'>
                    <img className='h-full w-full object-cover' src={image} alt="" />
                </div>
                <h1 className='text-center text-sm pt-2 font-medium'>{subcategory_Name}</h1>
            </div>
        </Link>
    );
};

CategoriesCart.propTypes = {
    categorie: PropTypes.object
}

export default CategoriesCart;