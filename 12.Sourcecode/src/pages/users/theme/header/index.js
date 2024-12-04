import { memo, useState } from "react";
import "./styte.scss";
import {AiOutlineFacebook, AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { formatter } from "utils/fomater";
import Handmade from "./Handmade.png";
import { TiShoppingCart } from "react-icons/ti";
import { ROUTERS } from "utils/routers";


const Header = () => {  
    const navigate = useNavigate();
    const [menus, ] = useState([
        {
            name: "Trang Chủ",
            path: ROUTERS.USER.HOME,
        },
        {
            name: "Cửa Hàng",
            path: ROUTERS.USER.PROFILE,
        },
        {
            name: "Sản Phẩm",
            path: " ",
            isShowSubmenu : false,
            child: [
                {
                    name: "Len",
                    path: " ",
                },
                {
                    name: "Hoa",
                    path: " ",
                },
                {
                    name: "Gốm",
                    path: " ",
                },
            ]
        },
        {
            name: "Bài Viết",
            path: " ",
        },
        {
            name: "Liên Hệ",
            path: " ",
        },
       
    ])
    return(
        <>
            <div className="header_top">
                <div className="container"> 
                    <div className="row">
                        <div className="col-6 header_top_left">
                            <ul>
                                <li> <AiOutlineMail />namsle@gmail.com</li>
                                <li>miễn phí ship đơn hàng {formatter(200000)}</li>
                            </ul>
                        </div>
                         <div className="col-6 header_top_right">
                            <ul>
                                <li>
                                    <Link to={""}>
                                        <AiOutlineFacebook/>
                                    </Link>
                                </li>
                                <li>
                                    <Link too="/login">
                                        <AiOutlineUser />
                                    </Link>
                                </li>
                                <li onClick={() => navigate(ROUTERS.ADMIN.LOGIN)}>
                                    <span>Đăng nhập</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 ">
                        <div className="header_logo">
                            <img src={Handmade}  alt="Handmade" width="150"/>
                        </div>
                    </div>
                    <div className="col-xl-6 ">
                        <nav className="header_menu">
                            <ul>
                                {menus?.map((menu, menuKey) => (
                                    <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                                        <Link to={menu?.path}>{menu?.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div className="col-xl-3 ">
                         <div className="header_cart">
                            <div className="header_cart_price">
                                <span>{formatter(1000000)}</span>
                           </div>
                           <ul>
                                <li>
                                    <Link to="#">
                                        <TiShoppingCart />
                                        <span>5</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="container">
            <div className="row">
                    <div className="hero_search_container">
                        <div className="hero_search">
                            <div className="hero_search_form">
                                <form>
                                    <input type="text" placeholder=""/>
                                    <button type="submit" className="site_bt">Search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default memo(Header);