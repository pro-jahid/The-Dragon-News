import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();
    console.log(location);

    if(loading){
        return <Spinner animation="border" variant="primary" />
    }
    
    if(user){
        return children;
    }

    return <Navigate state={{from: location}} to="/login"></Navigate>
};

export default PrivateRoute;