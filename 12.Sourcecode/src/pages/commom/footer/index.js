import { memo } from "react";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
import './styte.scss';
const Footer = () => {
    return (
    <footer className="footer">
        <div className="container" >
            <div className="row">
                <div className="col-lg-3">
                    <div className="footer_about">
                        <h1 className="footer_about_logo">HANDMADE OCEAN</h1>
                        <ul>
                            <li>Địa chỉ: DN</li>
                            <li>Phone: 09055508</li>
                            <li>Email: DN@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="footer_widget">
                        <h6>Cửa hàng</h6>
                        <ul>
                            <li>
                                <Link to={""}>Liên hệ</Link>
                            </li>
                            <li>
                                <Link to={""}>Thông tin về chúng tôi</Link>
                            </li>
                            <li>
                                <Link to={""}>sản phẩm kinh danh</Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link to={""}>Thông tin tài khoản</Link>
                            </li>
                            <li>
                                <Link to={""}>Giỏ hàng</Link>
                            </li>
                            <li>
                                <Link to={""}>Danh sách ưa thích</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="footer_widget">
                        <h6>Khuyễn mãi & Ưu đãi</h6>
                        <p>Đăng kí thông tin tại đây</p>
                        <form action="#">
                            <div className="input_group">
                                <input type="text" placeholder="Nhập Email"/>
                                <button type="submit" className="button_submit">
                                    Đăng ký
                                </button>
                            </div>
                            <div className="footer_widget_social">
                                <div>
                                    <AiOutlineFacebook/>
                                </div>
                                <div>
                                    <AiOutlineInstagram/>
                                </div>
                                <div>
                                    <AiOutlineLinkedin/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div> 
    </footer>
    )
};
export default memo(Footer);