import { memo, useState } from "react";
import "./styte.scss";
import {AiOutlineFacebook, AiOutlineUser, AiOutlineMail, AiOutlineMenu, AiOutlinePhone } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { formatter } from "utils/fomater";
import Handmade from "./Handmade.png";
import { TiShoppingCart } from "react-icons/ti";
import { ROUTERS } from "utils/routers";


const Header = () => {  
    const navigate = useNavigate();
    const [isshowproduct, Setshowproduct ] = useState(true);
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
                <div className="row hero_product_container">
                    <div className="col-lg-3 hero_product">
                        <div className="hero_product_all" 
                        onClick={() => Setshowproduct(!isshowproduct)}>
                            <AiOutlineMenu/>
                            Danh sách sản phẩm
                        </div>
                             <ul className={isshowproduct ? "" : "hidden"}>
                                <li>
                                    <Link to={"#"}>Len</Link>
                                </li>
                                <li>
                                    <Link to={"#"}>Gốm</Link>
                                </li>
                                <li>
                                    <Link to={"#"}>Tranh sơn mài</Link>
                                </li>
                                <li>
                                    <Link to={"#"}>Nón lá</Link>
                                </li>
                            </ul>
                    </div>
                    <div className="col-lg-9 hero_search_container">
                        <div className="hero_search">
                            <div className="hero_search_form">
                                <form>
                                    <input type="text" placeholder="Bạn đang tìm gì"/>
                                    <button type="submit" className="site_bt">Search</button>
                                </form>
                            </div>
                            <div className="hero_search_phone">
                                <div className="hero_search_phone_icon">
                                   <AiOutlinePhone/>
                                </div>
                                <div className="hero_search_phone_text">
                                     <p>0905550823</p>
                                    <span>Hổ trợ khách hàng</span>
                                </div>
                            </div>
                        </div>
                        <div className="hero_item">
                            <div className="hero_text">
                                <span>Sản phẩm chất lượng</span>
                                <h2>
                                    Mẫu mã <br/>
                                    đa dạng
                                </h2>
                                <p>Miễn phí giao hàng tận nơi</p>
                                <Link to="" className="primary-btn">
                                    Mua ngay
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default memo(Header);