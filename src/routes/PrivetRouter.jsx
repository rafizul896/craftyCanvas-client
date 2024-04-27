import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivetRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return (
            <div className="text-center">
                <span className="loading loading-bars loading-lg"></span>
                {/* <span className="loading loading-infinity loading-lg"></span> */}
            </div>
        )
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

PrivetRouter.propTypes = {
    children: PropTypes.node
}

export default PrivetRouter;