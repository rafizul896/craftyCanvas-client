import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';
import Loader from "../pages/extra/Loader";


const PrivetRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return (
            <Loader></Loader>
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