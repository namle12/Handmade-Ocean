import { memo } from "react";
import Header from "../header";
import Footer from "../../../commom/footer";


const Masterlayout = ({ children, ...props }) => {
    
    return (
        <div {...props}>
            <Header />
            {children}
            <Footer />
        </div>
    );
};
export default memo(Masterlayout);