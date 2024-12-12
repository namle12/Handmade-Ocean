import { memo } from "react";
import Footer from "../../../commom/footer/index.js";
import { ROUTERS } from "utils/routers.js";
import { useLocation } from "react-router-dom";


const MasterADlayout = ({ children, ...props }) => {
    const location = useLocation();
    const isLoginPage = location.pathname.startsWith(ROUTERS.ADMIN.LOGIN);
    const isRegisterPage = location.pathname.startsWith(ROUTERS.ADMIN.LOGIN);
    
    return (
        <div {...props}>
            {children}
            {!isLoginPage || !isRegisterPage && <Footer />}
            
        </div>
    );
};
export default memo(MasterADlayout);