import Banner from "./Banner";
import ArtAndCraftCategories from "./challengesPages/ArtAndCraftCategories";
import CraftItemsSection from "./requirePages/CraftItemsSection";

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div className="py-10">
                <CraftItemsSection></CraftItemsSection>
            </div>
            <div>
                <ArtAndCraftCategories></ArtAndCraftCategories>
                {/* <h1 className="text-3xl md:text-4xl font-semibold text-center">All the arts & crafts by Category</h1> */}
                {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 text-center gap-3 justify-center items-center mt-10 md:text-lg font-medium">
                    <Link><button className="border px-5 py-3 rounded-md">Landscape Painting</button></Link>
                    <Link><button className="border px-5 py-3 rounded-md">Portrait Drawing</button></Link>
                    <Link><button className="border px-5 py-3 rounded-md">Watercolour Painting</button></Link>
                    <Link><button className="border px-5 py-3 rounded-md">Oil Painting</button></Link>
                    <Link><button className="border px-5 py-3 rounded-md">Charcoal Sketching</button></Link>
                    <Link><button className="border px-5 py-3 rounded-md">Cartoon Drawing</button></Link>
                </div> */}
            </div>
            <div>
                <h1 className="text-4xl text-center font-semibold py-10">News and Features</h1>
                <div className="flex flex-col md:flex-row gap-10 justify-center">
                    <div className="flex flex-col gap-10 justify-center items-center h-[300px] lg:h-[320px] md:flex-1 bg-[linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5)),url('https://i.imghippo.com/files/eyb4v1714362895.jpg')] bg-no-repeat bg-cover">
                        <h2 className="text-lg font-semibold text-white">Artists And Their Music</h2>
                        <button className="border-2 px-5 py-2 rounded-md text-white ">Read More</button>
                    </div>
                    <div className="flex flex-col gap-10 justify-center items-center h-[300px] lg:h-[320px] md:flex-1 bg-[linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5)),url('https://i.imghippo.com/files/YSC5J1714362919.jpg')] bg-no-repeat bg-cover">
                        <h2 className="text-lg font-semibold text-white">Decorating with Large Art</h2>
                        <button className="border-2 px-5 py-2 rounded-md text-white ">Read More</button>
                    </div>
                    <div className="flex flex-col gap-10 justify-center items-center h-[300px] lg:h-[320px] md:flex-1 bg-[linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5)),url('https://i.imghippo.com/files/Va6UD1714362776.webp')] bg-no-repeat bg-cover">
                        <h2 className="text-lg font-semibold text-white text-center">How & Why to Start Collecting <br /> Art in Your 20s</h2>
                        <button className="border-2 px-5 py-2 rounded-md text-white ">Read More</button>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-4xl text-center py-10 font-semibold">Our Partners</h1>
                <div className="flex flex-col md:flex-row items-center gap-10">
                    <div className="flex-1">
                        <img className="w-[100%]" src="https://i.imghippo.com/files/lbpeU1714327299.webp" alt="" />
                    </div>
                    <div className="flex-1">
                        <img className="w-[100%]" src="https://i.imghippo.com/files/VJkI51714327320.jpg" alt="" />

                    </div>
                    <div className="flex-1">
                        <img className="w-[100%]" src="https://i.imghippo.com/files/ETnuH1714327352.webp" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;