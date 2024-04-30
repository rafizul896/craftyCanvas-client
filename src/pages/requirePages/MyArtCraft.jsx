import { useLoaderData } from "react-router-dom";
import MyArtCraftCart from "./MyArtCraftCart";
import { useState } from "react";
import { Helmet } from "react-helmet";

const MyArtCraft = () => {
    const loadedmyCraftItems = useLoaderData();
    const [myCraftItems, setMyCraftItems] = useState(loadedmyCraftItems)

    const handleCraftItemsFilter = filter => {
        if (filter === 'all'){
            setMyCraftItems(loadedmyCraftItems)
        }
        else if (filter === 'yes'){
            const craftItem = loadedmyCraftItems.filter(item => item.customization == filter);
            setMyCraftItems(craftItem)
        }
        else if (filter === 'no'){
            const craftItem = loadedmyCraftItems.filter(item => item.customization == filter);
            setMyCraftItems(craftItem)
        }
    }
    return (
        <div>
            <Helmet>
                <title>My Art&Craft List | CraftyCanvas</title>
            </Helmet>
            <div className="flex justify-center items-center pb-10">
                <details className="dropdown">
                    <summary className="m-1 p-3 rounded-lg bg-[#23BE0] border">Customization</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={()=>handleCraftItemsFilter('all')}><a>All</a></li>
                        <li onClick={()=>handleCraftItemsFilter('yes')}><a>Yes</a></li>
                        <li onClick={()=>handleCraftItemsFilter('no')}><a>No</a></li>
                    </ul>
                </details>
            </div>
            {/* <h1 className="text-center pb-10">My Art Craft section</h1> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    myCraftItems.map(myCraftItem => <MyArtCraftCart key={myCraftItem._id} myCraftItem={myCraftItem} myCraftItems={myCraftItems} setMyCraftItems={setMyCraftItems}></MyArtCraftCart>)
                }
            </div>
        </div>
    );
};

export default MyArtCraft;