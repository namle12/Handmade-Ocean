import { memo } from "react";
import ReactDOM from 'react-dom';
import "./style.scss";
const HomePage = () => {
    return (
        <div className="homepage">
        <a href="#" className="popular-shop">Click here to go to the popular shop!</a>
          {/* <h1>Click here to go to the popular shop!</h1> */}
          <div className="card-container">
            <div className="card">
            <img src={"./img/image.png"} alt="Lyn's Hand" />
            <h2>Lyn's Hand</h2>
            <p>Handcrafted items with love.</p>
            <a href="#" className="see-more">See More</a>
          </div>
          <div className="card">
            <img src="path/to/image2.jpg" alt="Moji Handmade" />
            <h2>Moji Handmade</h2>
            <p>Unique handmade crafts.</p>
            <a href="#" className="see-more">See More</a>
          </div>
          <div className="card">
            <img src="path/to/image3.jpg" alt="Bat Trang Pottery Village" />
            <h2>Bat Trang Pottery Village</h2>
            <p>Traditional pottery making.</p>
            <a href="#" className="see-more">See More</a>
          </div>
        </div>
      </div>
    );    
};
export default memo(HomePage);