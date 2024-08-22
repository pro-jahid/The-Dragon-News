import { Outlet } from "react-router-dom";
import NavigationBar from "../../pages/Home/Home/shared/NavigationBar/NavigationBar";


const LoginLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;