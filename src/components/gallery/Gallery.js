import React, { useState } from "react";
// import Carousel from "better-react-carousel";
import "./Gallery.css";
import vivoHome from "../../asserts/vivoHme.png";
import vivoT2 from "../../asserts/vivoT2Home.png";
import getStyle from "../../asserts/styleHome.png";
import gangHome from "../../asserts/gangHome.png";
import oppoHome from "../../asserts/oppoHome.png";
import oppoHomeReno from "../../asserts/oppoRenoHome.png";
import oppoFlip from "../../asserts/oppoFlipHome.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import LatestProducts from "../../pages/latestProducts/LatestProducts";
import BestSellers from "../../pages/bestSellers/BestSellers";
import Outfits from "../../pages/outfits/Outfits";
import AllCategoriesTabs from "../../pages/allCategoriesTabs/AllCategoriesTabs";

const Gallery = () => {
  const responsiveHeader = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div
      className="carousel-container"
      style={{ display: "flex", flexDirection: "column", gap: 25, }}
    >
      <div className="carousel-top">
        <Carousel
          responsive={responsiveHeader}
          slidesToSlide={1}
          draggable={true}
          rewind={true}
          infinite={true}
          // swipeable={true}
        >
          <div>
            <img width="100%" height="425px" src={vivoHome} />
          </div>
          <div>
            <img width="100%" height="425px" src={vivoT2} />
          </div>
          <div>
            <img width="100%" height="425px" src={getStyle} />
          </div>
          <div>
            <img width="100%" height="425px" src={gangHome} />
          </div>
          <div>
            <img width="100%" height="425px" src={oppoHome} />
          </div>
          <div>
            <img width="100%" height="400px" src={oppoHomeReno} />
          </div>
          <div>
            <img width="100%" height="400px" src={oppoFlip} />
          </div>
        </Carousel>
      </div>
      <div className="carousel-child">
        <div></div>
        <div>
          <LatestProducts title="Latest Products" />
          <BestSellers title="Best Sellers" imageDetailsClass="bestSellers" />
          <Outfits title="Outfits" />
          <AllCategoriesTabs />
        </div>
        <div></div>
      </div>
    </div>
  );
};
export default Gallery;
