import { useLoaderData, useNavigation } from "react-router-dom";
import CraftItemCart from "./CraftItemCart";
import Loader from "../extra/Loader";

const CraftItemsSection = () => {
    const loadedCraftItems = useLoaderData();
    const navigation = useNavigation();
    
    if(navigation.state === 'loading'){
        return <Loader></Loader>
    }
    const craftItems = loadedCraftItems.slice(0,6);

    return (
        <div>
            <div>
                <h1 className="text-center text-2xl md:text-4xl font-bold pb-7">Discover Art You Love From the Worlds <br className="hidden lg:block"/> Leading Online Gallery</h1>
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