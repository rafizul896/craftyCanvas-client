import { CgWebsite } from "react-icons/cg";
import { GiSatelliteCommunication } from "react-icons/gi";

const ExtraSection = () => {
    return (
        <div className="lg:min-h-[300px] bg-[linear-gradient(rgba(0,0,0,0.35),rgba(0,0,0,0.32)),url('https://i.imghippo.com/files/eLkSX1714383116.jpg')] bg-no-repeat bg-cover flex flex-col md:flex-row gap-7 text-white px-2 md:px-10 py-10 rounded-lg">
            <div className="flex-1 flex flex-col justify-center items-center text-center space-y-2">
                <h3 className="text-xl lg:text-2xl font-medium">The Most Complete Artist Marketing Package.</h3>
                <p className="text-sm lg:text-base">Find out why artists love Artspan. Join us today! Begin to sell art online. Free trial.</p>
                <button className="border-2 px-5 py-2 rounded-md text-white hover:bg-white hover:text-black">See More</button>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center text-center space-y-2">
                <div className="p-4 rounded-full text-3xl bg-[#f03]">
                    <CgWebsite />
                </div>
                <h3 className="text-lg lg:text-xl font-medium">The Best Individually Branded Website</h3>
                <p className="text-sm lg:text-base">Easiest to set up and customize with an ample choice of looks. Designed specially for artist needs. Complete E-commerce package. Includes the prints-on-demand feature!</p>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center text-center space-y-2">
                <div className="p-4 rounded-full text-3xl bg-[#f03]">
                    <GiSatelliteCommunication />
                </div>
                <h3 className="text-lg lg:text-xl font-medium">A Community of Professional Artists</h3>
                <p className="text-sm lg:text-base">You can sell to your collectors who go directly to your artist website or sell to buyers who find you in the online art Marketplace. There is no commission on sales to your collectors, and only 10% when you sell to buyers who discover your art through Artspan.com</p>
            </div>
        </div>
    );
};

export default ExtraSection;