import { ADMIN_PATH, ROUTERS } from "./utils/routers";
import HomePage from "./pages/users/homePage";
import { Route, Routes, useLocation } from "react-router-dom";
import MasterLayout from "./pages/users/theme/masterlayout";
import ProfilePage from "./pages/users/profilePage";
import MasterADlayout from "pages/admin/theme/masterADlayout";
import LoginAdPage from"./pages/admin/LoginPage";
import RegisterPage from"./pages/admin/RegisterPage";

const rederUserRouter = () =>{
    const UserRouter = [
        {
            path: ROUTERS.USER.HOME,
            Component: <HomePage/>,
        },
        {
            path: ROUTERS.USER.PROFILE,
            Component: <ProfilePage/>,
        },   
    ];
    return (
        <MasterLayout>
            <Routes>
                {
                UserRouter.map((item, key) =>(
                <Route key={key} path={item.path} element={item.Component} />
                ))}
            </Routes>
        </MasterLayout>
        
        
    );
};
const rederAdminRouter = () =>{
    
    const adminRouter = [
       
        {
            path: ROUTERS.ADMIN.LOGIN,  
            Component: <LoginAdPage/>,
        },
        {
            path: ROUTERS.ADMIN.REGISTER,  
            Component: <RegisterPage/>,
        },    
    ];
    return (
        <MasterADlayout>
            <Routes>
                {
                adminRouter.map((item, key) =>(
                <Route key={key} path={item.path} element={item.Component} />
                ))}
            </Routes>
        </MasterADlayout>
    );
};
const RouterCustomer = () =>{
    const location = useLocation();
    const isAdminRouters = location.pathname.startsWith(ADMIN_PATH)

    return isAdminRouters ? rederAdminRouter() : rederUserRouter();
};
export default RouterCustomer;