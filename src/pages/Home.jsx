import Banner from "./Banner";
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
        </div>
    );
};

export default Home;