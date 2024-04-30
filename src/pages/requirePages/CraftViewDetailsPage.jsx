import { IoPricetagsOutline } from "react-icons/io5";
import { useLoaderData, useNavigation } from "react-router-dom";
import { IoIosHeartEmpty } from "react-icons/io";
import { BiDollar } from "react-icons/bi";
import { TfiWrite } from "react-icons/tfi";
import { Helmet } from "react-helmet";
import Loader from "../extra/Loader";

const CraftViewDetailsPage = () => {
    const loadedCraftItem = useLoaderData();
    const navigation = useNavigation();
    
    if(navigation.state === 'loading'){
        return <Loader></Loader>
    }
    const { user_name, item_name, subcategory_Name, stockStatus, customization, processing_time, short_description, price, rating, image } = loadedCraftItem;

    return (
        <div className="border rounded-md flex flex-col lg:flex-row gap-10 p-2 md:p-5">
            <Helmet>
                <title>View Details | CraftyCanvas</title>
            </Helmet>
            <div className="lg:flex-1 space-y-3">
                <div className="md:h-[400px] flex justify-center">
                    <img className="h-full w-ful lg:object-cover" src={image} alt="" />
                </div>
                <p className="font-semibold hidden lg:block">Artwork description: <span className="font-normal">{short_description}</span></p>
            </div>
            <div className="lg:flex-1 space-y-5">
                <h3 className="font-bold text-2xl">{item_name}</h3>
                <div className="flex items-center gap-3 font-semibold">
                    <IoPricetagsOutline className="text-[#ff00d3]"/>
                    <p>
                        {subcategory_Name}
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <TfiWrite className="text-[#ff00d3]"/>
                    <p className="font-semibold">
                        By {user_name}
                    </p>
                </div>
                <div>
                    <p className="font-semibold lg:hidden">Artwork description: <span className="font-normal">{short_description}</span></p>
                </div>
                <p className="font-semibold">stock_status : <span className="font-normal">{stockStatus}</span></p>
                <p className="font-semibold">customization : <span className="font-normal">{customization}</span></p>
                <p className="font-semibold">processing_time : <span className="font-normal">{processing_time}</span></p>
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
                <div className="flex flex-col gap-3">
                    <button className="btn btn-secondary rounded-full w-full">Add to Cart</button>
                    <button className="btn hover:btn-secondary border border-[#ff00d3] bg-white text-black rounded-full w-full"> <span className="text-xl"><IoIosHeartEmpty /></span> Add to my favorites</button>
                </div>
                
            </div>
        </div>
    );
};

export default CraftViewDetailsPage;