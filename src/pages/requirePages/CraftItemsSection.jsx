import { useLoaderData } from "react-router-dom";
import CraftItemCart from "./CraftItemCart";

const CraftItemsSection = () => {
    const loadedCraftItems = useLoaderData();
    const craftItems = loadedCraftItems.slice(0,6);
    console.log(craftItems)

    return (
        <div>
            <div>
                <h1 className="text-center text-2xl md:text-4xl font-semibold">Discover Art You Love From the Worlds Leading Online Gallery</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5">
                {
                    craftItems.map(craftItem => <CraftItemCart key={craftItem._id} craftItem={craftItem}></CraftItemCart>)
                }
            </div>
        </div>
    );
};

export default CraftItemsSection;