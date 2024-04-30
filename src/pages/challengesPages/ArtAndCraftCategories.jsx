import { useState, useEffect } from "react";
import CategoriesCart from "./CategoriesCart";
import { Typewriter } from "react-simple-typewriter";
import Loader from "../extra/Loader";
import { useNavigation } from "react-router-dom";

const ArtAndCraftCategories = () => {
    const [artCraftCategories, setartCraftCategories] = useState([]);
    useEffect(() => {
        fetch('https://assignment-ten-server-six-eta.vercel.app/artCraftCategories')
            .then(res => res.json())
            .then(data => setartCraftCategories(data))
    }, [])

    const navigation = useNavigation();
    
    if(navigation.state === 'loading'){
        return <Loader></Loader>
    }

    return (
        <div>
            <h1 className="text-2xl text-center font-bold py-10  md:text-4xl" style={{ paddingTop: '1rem'}}>
                Art & Craft{' '}
                <span className="text-2xl text-center font-bold py-10  md:text-4xl  bg-gradient-to-r from-[#06914e] via-[#0ea5e9] to-[#2e845a] text-transparent bg-clip-text animate-gradient bg-300%">
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                        words={['Categories']}
                        loop={false}
                        cursor={false}
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span>
            </h1 >

            < div className="grid grid-cols-1 md:grid-cols-3 gap-10" >
                {
                    artCraftCategories.map(categorie => <CategoriesCart key={categorie._id} categorie={categorie}></CategoriesCart>)
                }
            </div >
        </div >
    );
};

export default ArtAndCraftCategories;