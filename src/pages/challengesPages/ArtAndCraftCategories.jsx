import { useState, useEffect } from "react";
import CategoriesCart from "./CategoriesCart";

const ArtAndCraftCategories = () => {
    const [artCraftCategories, setartCraftCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/artCraftCategories')
            .then(res => res.json())
            .then(data => setartCraftCategories(data))
    }, [])
    console.log(artCraftCategories)
    return (
        <div>
            <h1 className="text-4xl text-center font-semibold py-10">Art & Craft Categories</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {
                    artCraftCategories.map(categorie => <CategoriesCart key={categorie._id} categorie={categorie}></CategoriesCart>)
                }
            </div>
        </div>
    );
};

export default ArtAndCraftCategories;