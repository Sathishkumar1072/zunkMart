import React, { useState } from "react";
import mensDress1 from "../../../../asserts/oppoTabimg_1.jpg";
import mensDress2 from "../../../../asserts/oppoTabimg_2.jpg";
import childDress1 from "../../../../asserts/vivoTabimg_1.png";
import childDress2 from "../../../../asserts/vivoTabimg_2.png";
import womenDressBlue1 from "../../../../asserts/Women_Blue_1.png";
import womenDressBlue2 from "../../../../asserts/Women_Blue_2.png";
import womenDressRed1 from "../../../../asserts/Women_Red_1.png";
import womenDressRed2 from "../../../../asserts/Women_Red_2.png";
import Mobile1 from "../../../../asserts/MobilePhone_1.jpg";
import Mobile2 from "../../../../asserts/MobilePhone_2.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../../../pages/latestProducts/LatestProducts.css";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShuffleSharpIcon from "@mui/icons-material/ShuffleSharp";
import { Button } from "@mui/material";

const Mobiles = ({ title }) => {
  const initialState = {
    men1: mensDress1,
    child1: childDress1,
    womenRed1: womenDressRed1,
    womenBlue1: womenDressBlue1,
    mob1: Mobile1,
  };
  const [hoveredImg, setHoveredImg] = useState(initialState);
  const carouselItemData = [
    {
      name: "men1",
      imageSource: hoveredImg?.men1,
      additionalImageSource: mensDress2,
      imageDetails: {
        productFor: "MEN",
        productName: "Men Dress OverSized",
        productRatings: 4,
        productBuyersCount: 2,
        productOriginalPrice: "899",
        offerAppliedPrice: "499",
        offerPercentage: "54%",
        stockDetails: "",
      },
    },
    {
      name: "child1",
      imageSource: hoveredImg?.child1,
      additionalImageSource: childDress2,
      imageDetails: {
        productFor: "CHILD",
        productName: "Child Dress OverSized",
        productRatings: 3,
        productBuyersCount: 2,
        productOriginalPrice: "699",
        offerAppliedPrice: "525",
        offerPercentage: "54%",
        stockDetails: "",
      },
    },
    // {
    //   name: "mob1",
    //   imageSource: hoveredImg?.mob1,
    //   additionalImageSource: Mobile2,
    //   imageDetails: {
    //     productFor: "MOBILE",
    //     productName: "Mobile for Users",
    //     productRatings: 5,
    //     productBuyersCount: 0,
    //     productOriginalPrice: "899",
    //     offerAppliedPrice: "599",
    //     offerPercentage: "51%",
    //     stockDetails: "OUT OF STOCK",
    //   },
    // },
    // {
    //   name: "womenBlue1",
    //   imageSource: hoveredImg?.womenBlue1,
    //   additionalImageSource: womenDressBlue2,
    //   imageDetails: {
    //     productFor: "WOMEN",
    //     productName: "Women Blue Dress OverSized",
    //     productRatings: 4,
    //     productBuyersCount: 3,
    //     productOriginalPrice: "999",
    //     offerAppliedPrice: "499",
    //     offerPercentage: "54%",
    //     stockDetails: "",
    //   },
    // },
    // {
    //   name: "womenRed1",
    //   imageSource: hoveredImg?.womenRed1,
    //   additionalImageSource: womenDressRed2,
    //   imageDetails: {
    //     productFor: "WOMEN",
    //     productName: "Women Red Dress OverSized",
    //     productRatings: 4,
    //     productBuyersCount: 2,
    //     productOriginalPrice: "1499",
    //     offerAppliedPrice: "699",
    //     offerPercentage: "50%",
    //     stockDetails: "",
    //   },
    // },
    // {
    //   name: "men1",
    //   imageSource: hoveredImg?.men1,
    //   additionalImageSource: mensDress2,
    //   imageDetails: {
    //     productFor: "MEN",
    //     productName: "Men Dress OverSized",
    //     productRatings: 3,
    //     productBuyersCount: 2,
    //     productOriginalPrice: "899",
    //     offerAppliedPrice: "499",
    //     offerPercentage: "54%",
    //     stockDetails: "",
    //   },
    // },
    // {
    //   name: "child1",
    //   imageSource: hoveredImg?.child1,
    //   additionalImageSource: childDress2,
    //   imageDetails: {
    //     productFor: "CHILD",
    //     productName: "Child Dress OverSized",
    //     productRatings: 3,
    //     productBuyersCount: 2,
    //     productOriginalPrice: "699",
    //     offerAppliedPrice: "525",
    //     offerPercentage: "54%",
    //     stockDetails: "",
    //   },
    // },
    // {
    //   name: "mob1",
    //   imageSource: hoveredImg?.mob1,
    //   additionalImageSource: Mobile2,
    //   imageDetails: {
    //     productFor: "MOBILE",
    //     productName: "Mobile for Users",
    //     productRatings: 4,
    //     productBuyersCount: 0,
    //     productOriginalPrice: "899",
    //     offerAppliedPrice: "599",
    //     offerPercentage: "53%",
    //     stockDetails: "",
    //   },
    // },
  ];
  const handleHover = (name, imageUrl) => {
    if (hoveredImg[name] === imageUrl) {
      console.log("imageUrl: " + name, imageUrl);
      setHoveredImg({
        men1: mensDress1,
        child1: childDress1,
        womenRed1: womenDressRed1,
        womenBlue1: womenDressBlue1,
        mob1: Mobile1,
      });
    } else if (hoveredImg[name] !== imageUrl) {
      setHoveredImg({
        ...hoveredImg,
        [name]: imageUrl,
      });
    }
  };
  const responsiveChildData = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <div className="latestProducts-container">
      {/* <div className="section-heading">sam</div> */}
      <div className="section-items-container">
        <Carousel
          responsive={responsiveChildData}
          slidesToSlide={1}
          // autoPlay={true}
          // autoPlaySpeed={2000}
          rewind={true}
          infinite={true}
        >
          {carouselItemData?.map((carouselItem, i) => {
            return (
              <div className="carouselItems-list-parent">
                <div className="carouselItems-Details">
                  <div className="offer-stock-container">
                    <div className="offerDetails">
                      {carouselItem?.imageDetails?.offerPercentage} OFF
                    </div>
                    {carouselItem?.imageDetails?.stockDetails && (
                      <div className="stockDetails">
                        {carouselItem?.imageDetails?.stockDetails}
                      </div>
                    )}
                  </div>
                  <div className="image-view-container">
                    <img
                      key={i}
                      width="185px"
                      height="250px"
                      src={carouselItem?.imageSource}
                      onMouseEnter={() =>
                        handleHover(
                          carouselItem?.name,
                          carouselItem?.additionalImageSource
                        )
                      }
                      onMouseOut={() =>
                        handleHover(
                          carouselItem?.name,
                          carouselItem?.imageSource
                        )
                      }
                    />
                    <div className="quickView">Quick View</div>
                  </div>
                  <div className="imageDetails-parent">
                    <div className="productsFor">
                      {carouselItem?.imageDetails?.productFor}
                    </div>
                    <div className="product-name">
                      {carouselItem?.imageDetails?.productName}
                    </div>
                    <div className="product-ratings-count">
                      <div className="product-ratings">
                        {/* {carouselItem?.imageDetails?.productRatings} */}
                        {(() => {
                          const elements = [];
                          for (
                            let i = 0;
                            i < carouselItem?.imageDetails?.productRatings;
                            i++
                          ) {
                            elements.push(<StarIcon classes="starIcon" />);
                          }
                          return elements;
                        })()}
                        {/* <StarIcon classes="starIcon" />
                      <StarIcon classes="starIcon" />
                      <StarIcon classes="starIcon" />
                      <StarIcon classes="starIcon" /> */}
                      </div>
                      <div className="product-count">{`(${carouselItem?.imageDetails?.productBuyersCount})`}</div>
                    </div>
                    <div className="product-prize-container">
                      <div className="product-original">
                        <s>
                          ₹{carouselItem?.imageDetails?.productOriginalPrice}.00
                        </s>
                      </div>
                      <div className="product-offered">
                        {" "}
                        ₹{carouselItem?.imageDetails?.offerAppliedPrice}.00
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carouselItems-Footer">
                  <div className="Icon-carousel">
                    <FavoriteBorderIcon />
                  </div>
                  <div>
                    <Button class="selectOptions">Select Options</Button>
                  </div>
                  <div className="Icon-carousel">
                    <ShuffleSharpIcon />
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Mobiles;
