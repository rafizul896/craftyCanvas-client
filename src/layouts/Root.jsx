import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../pages/shared/Footer";

const Root = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="min-h-[45vh]">
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Root;