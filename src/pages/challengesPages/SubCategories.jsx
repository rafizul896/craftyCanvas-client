import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SubCraftItem from "./SubCraftItem";

const SubCategories = () => {
    const loadedCraftItems = useLoaderData()
    const [craftItems, SetCraftItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/craftItems')
            .then(res => res.json())
            .then(data => SetCraftItems(data))
    }, [])

    const subCategorie = craftItems.filter(craftItem => craftItem.subcategory_Name === loadedCraftItems.subcategory_Name);
    console.log(subCategorie)

    return (
        <div>
            <h1 className="text-3xl md:text-4xl font-semibold text-center py-10">{loadedCraftItems.subcategory_Name}  all the arts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    subCategorie.map(craftItem => <SubCraftItem key={craftItem._id} craftItem={craftItem}></SubCraftItem>)
                }
            </div>
        </div>
    );
};

export default SubCategories;