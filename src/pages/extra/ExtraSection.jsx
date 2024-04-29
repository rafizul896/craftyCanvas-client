import { CgWebsite } from "react-icons/cg";
import { GiSatelliteCommunication } from "react-icons/gi";

const ExtraSection = () => {
    return (
        <div>
            <div>
                <h1>The Most Complete Artist Marketing Package.</h1>
                <p>Find out why artists love Artspan. Join us today! Begin to sell art online. Free trial.</p>
                <button className="border-2 px-5 py-2 rounded-md text-white ">See More</button>
            </div>
            <div>
                <div>
                    <CgWebsite />
                </div>
                <h3>The Best Individually Branded Website</h3>
                <p>Easiest to set up and customize with an ample choice of looks. Designed specially for artist needs. Complete E-commerce package. Includes the prints-on-demand feature!</p>
            </div>
            <div>
                <div>
                    <GiSatelliteCommunication />
                </div>
                <h3>A Community of Professional Artists</h3>
                <p>You can sell to your collectors who go directly to your artist website or sell to buyers who find you in the online art Marketplace. There is no commission on sales to your collectors, and only 10% when you sell to buyers who discover your art through Artspan.com</p>
            </div>
        </div>
    );
};

export default ExtraSection;