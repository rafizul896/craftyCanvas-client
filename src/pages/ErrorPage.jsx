import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex justify-center flex-col items-center min-h-screen">
            <img className="h-[60v] relative" src={'https://i.imghippo.com/files/GPLxA1714133526.gif'} alt="img" />
            <Link to='/'><button className=" mt-3 btn bg-[#14a55f] text-white hover:text-black hover:border-2 hover:border-[#14a55f] hover:bg-white rounded-full px-5">Go Home</button></Link>
        </div>
    );
};

export default ErrorPage;