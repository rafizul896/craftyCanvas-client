import { useState, useEffect } from "react";
import CategoriesCart from "./CategoriesCart";
import { Typewriter } from "react-simple-typewriter";

const ArtAndCraftCategories = () => {
    const [artCraftCategories, setartCraftCategories] = useState([]);
    useEffect(() => {
        fetch('https://assignment-ten-server-six-eta.vercel.app/artCraftCategories')
            .then(res => res.json())
            .then(data => setartCraftCategories(data))
    }, [])
    console.log(artCraftCategories)
    return (
        <div>
            <h1 className="text-2xl md:text-4xl text-center font-semibold py-10" style={{ paddingTop: '1rem',  }}>
                Art & Craft{' '}
                <span style={{ color: 'red', fontWeight: 'bold' }}>
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