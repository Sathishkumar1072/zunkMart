import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Product.css";
// import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const Product = () => {
  const handleSlideSelect = () => {};
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  };
  const galleryImages = [
    "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1587382559340-818aa5fc7a43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1587482974261-139cb3302521?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
  ];
  const CustomDot = ({ onMove, index, onClick, active }) => {
    console.log("samm-->", index);
    const selectImage = [];
    galleryImages.map((imagesrc, imagesrcindex) => {
      return index == imagesrcindex && selectImage.push(imagesrc);
    });
    return (
      <div className="thumbnailContainer">
        <li
          className={active ? "active" : "inactive"}
          onClick={() => onClick()}
        >
          <img
            // className="d-block w-100"
            src={selectImage}
            alt="First slide"
            style={{ height: "100px", width: "100px" }}
          />
        </li>
      </div>
    );
  };

  const arrowStyle = {
    background: "transparent",
    border: 0,
    color: "#fff",
    fontSize: "80px",
  };
  const CustomRight = ({ onClick }) => (
    <button className="arrow right" onClick={onClick} style={arrowStyle}>
      <ArrowForwardIcon style={{ fontSize: "50px" }} />
    </button>
  );
  const CustomLeft = ({ onClick }) => (
    <button className="arrow left" onClick={onClick} style={arrowStyle}>
      <ArrowBackIcon style={{ fontSize: "50px" }} />
    </button>
  );
  //Also please improve the dot problem
  // Here we used number to just know click event buthelp us with ui too

  return (
    // <!-- Main Carousel Section Start -->
    <div className="product-carousel-container">
      <div></div>
      <div id="main-slide" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <Carousel
            responsive={responsive}
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={true}
            showDots
            sliderClass=""
            slidesToSlide={1}
            swipeable
            customDot={<CustomDot />}
            customRightArrow={<CustomRight />}
            customLeftArrow={<CustomLeft />}
          >
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                alt="First slide"
              />
            </div>
            <div className="carousel-item active ">
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1587382559340-818aa5fc7a43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                alt="Second slide"
              />
            </div>
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1587482974261-139cb3302521?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                alt="Third slide"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
    /* <!-- Main Carousel Section End --> */
  );
};

export default Product;
