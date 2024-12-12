import { memo } from "react";
import ReactDOM from 'react-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.scss";
import  image from "assets/users/images/product/image.png"; 
import  image1 from "assets/users/images/product/image1.png"; 
import  image2 from "assets/users/images/product/image2.png"; 
import  image3 from "assets/users/images/product/image.png"; 
import  image4 from "assets/users/images/product/image.png"; 
import  phong from "assets/users/images/baners/phong.png"; 
import { render } from "@testing-library/react";
import { data, Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";
import { formatter } from "utils/fomater";
// import "./style.scss";
const HomePage = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const sliderItems =[
      {
        bgImg : image ,
        name: "Giỏ hoa",
      },
      {
        bgImg : image1 ,
        name: "Gốm bát tràng",
      }, 
      {
        bgImg : image2 ,
        name: "Nón lá ",
      }, 
      {
        bgImg : image3 ,
        name: "Tranh sơn mài",
      }, 
      {
        bgImg : image4 ,
        name: "Chiếu Cẩm nê",
      },

  ]
  const listProducts = {
    all: {
      title: "Toàn bộ",
      products: [
        {
          img: image,
          name:"Hoa hồng",
          price: 200000,
        },
        {
          img: image1,
          name:"Gốm bát tràng",
          price: 200000,
        },
        {
          img: image2,
          name:"Nón lá",
          price: 200000,
        },
        {
          img: image,
          name:"Nón lá",
          price: 200000,
        },
        {
          img: image,
          name:"Nón lá",
          price: 200000,
        },
        {
          img: image,
          name:"Nón lá",
          price: 200000,
        }
      ]
    },
    len: {
      title: "len",
      products: [
        {
          img: image,
          name:"Labubu len",
          price: 200000,
        }
      ]
    },
    gom: {
      title: "Gốm",
      products: [
        {
          img: image,
          name:"Labubu len",
          price: 200000,
        }
      ]
    },
    nonla: {
      title: "Nón lá",
      products: [
        {
          img: image,
          name:"Labubu len",
          price: 200000,
        }
      ]
    },
    Chieu: {
      title: "Chiếu",
      products: [
        {
          img: image,
          name:"Labubu len",
          price: 200000,
        }
      ]
    }
    
  }
  const renderListProducts = (data) => {
    const tabList = [];
    const tabPanels = [];
    
    Object.keys(data).forEach((key, index) => {
      console.log(key, index);
      tabList.push(<Tab key={index}>{data[key].title}</Tab>);
      
      const tabPanel = [];
      data[key].products.forEach((item,j) => {
        tabPanel.push(
        <div className="col-lg-3" key={j}>
          <div className="List_item"> 
            <div
              className="List_item_pic"
              style={{
                backgroundImage: `url(${item.img})`,
              }}
            >
              <ul className="List_item_pic_hover">
                <li>
                  <AiOutlineEye/>
                </li>
                <li>
                  <AiOutlineShoppingCart/>
                </li>
              </ul>
            </div>
            <div className="List_item_text">
              <h6>
                <Link to="">{item.name}</Link>
              </h6>
              <h5>
                {formatter(item.price)}
              </h5>
            </div>
          </div>
        </div>);
      });
      tabPanels.push(tabPanel);

    });

      return (
        <Tabs>
          <TabList> {tabList}</TabList> 
        {tabPanels.map((item, key) => (
           <TabPanel key={key}>
           <div className="row">{item}</div>
         </TabPanel>
        ))}
    
      </Tabs>
      );
  };
    return (
      <>
      {/* Product-list-bedin */}
        <div className="container container_carousel_slider" >
          <Carousel responsive={responsive} className="carousel_slider">
            {
              sliderItems.map((item,key) => (
                <div className="carousel_slider_item"
                style={{backgroundImage: `url(${item.bgImg})`}}
                key={key}
                >
                  <p>{item.name}</p>
                </div>
              ))
            }
          </Carousel>
        </div>
        {/* Product-list-end */}
        {/* list begin */}
        <div className="container">
          <div className="list">
            <div className="section-title">
              <h2>Sản Phẩm Nổi Bật</h2>
            </div>
              {renderListProducts(listProducts)}
          </div>
        </div>
        {/* list end */}
      </>
    );    
    
};

export default memo(HomePage);
