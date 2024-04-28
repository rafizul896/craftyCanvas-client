import { useLoaderData } from "react-router-dom";
import MyArtCraftCart from "./MyArtCraftCart";

const MyArtCraft = () => {
    const myCraftItems = useLoaderData();
    
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    myCraftItems.map(myCraftItem => <MyArtCraftCart key={myCraftItem._id} myCraftItem={myCraftItem}></MyArtCraftCart>)
                }
            </div>
        </div>
    );
};

export default MyArtCraft;