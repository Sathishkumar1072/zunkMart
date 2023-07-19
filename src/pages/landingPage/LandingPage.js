import React, { useState } from "react";
import "./LandingPage.css";
import {
  MailOutline,
  PhoneOutlined,
  Search,
  PersonOutlineOutlined,
  FavoriteBorder,
  ShoppingCartOutlined,
  Summarize,
  Sync,
  Logout,
  Close,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import {
  MenuItem,
  FormControl,
  Select,
  TextField,
  Autocomplete,
  Button,
} from "@mui/material";
import zunkLogo from "../../asserts/zunkLogo.png";
import TabsComponent from "../../components/tabsComponent/TabsComponent";
import { useNavigate } from "react-router-dom";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

const LandingPage = () => {
  const navigate = useNavigate();
  const [sliderView, setSliderView] = useState(false);
  console.log("Enter", sliderView);
  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
  ];
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="landingPage-container">
      <div className="landingPage-header">
        <div className="user-mail-mob">
          <div className="user-mail">
            <MailOutline sx={{ fontSize: "0.9rem", marginTop: "2px" }} />{" "}
            zunkmart@gmail.com
          </div>
          <div className="user-mob">
            <PhoneOutlined sx={{ fontSize: "0.9rem" }} /> +91 9894927526
          </div>
        </div>
        <div className="landingTitle">Welcome to Zunkmart</div>
      </div>
      {/* <HomePage /> */}

      <div className="searchBarLogo-container">
        <div className="brandName">
          <img
            className={"zunkLogo"}
            src={zunkLogo}
            // onClick={handleSearchResult}
          />
        </div>
        <div className="globalSearch-container">
          <div className="searchBar">
            <Autocomplete
              className="searchBarAutoComplete"
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              sx={{ width: 400 }}
              size="small"
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Search for the products,categories,brands..."
                  sx={{
                    input: {
                      "&::placeholder": {
                        opacity: 1,
                      },
                    },
                  }}
                />
              )}
            />
          </div>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without labelss" }}
            >
              <MenuItem value="">
                <em>All Categories</em>
              </MenuItem>
              <MenuItem value={"Accessories"}>Accessories</MenuItem>
              <MenuItem value={"Mobiles"}>Mobiles</MenuItem>
              <MenuItem value={"TShirts"}>T-Shirts</MenuItem>
            </Select>
          </FormControl>
          {/* <div className="searchButton"> */}
          <Button sx={{ color: "black", width: 20 }} class="searchBarButton">
            <Search />
          </Button>
          {/* </div> */}
        </div>
        <div className="otherDetails">
          <div className="details-data myAccount" style={{ height: "60px" }}>
            <PersonOutlineOutlined /> <div>My Account</div>
            <div className="pointerDiv"></div>
            <div class="dropdown-myAccount">
              <div class="myAccount-dropdown-data">
                <PersonOutlineOutlined
                  sx={{ color: "#8224e3" }}
                  fontSize="medium"
                />
                My Profile
              </div>
              <div class="myAccount-dropdown-data">
                <Summarize sx={{ color: "#8224e3" }} /> My Orders
              </div>
              <div class="myAccount-dropdown-data">
                <FavoriteBorder sx={{ color: "#8224e3" }} />
                My Wishlist
              </div>
              <div class="myAccount-dropdown-data">
                <Sync sx={{ color: "#8224e3" }} />
                Compare
              </div>
              <div class="myAccount-dropdown-data">
                <Logout sx={{ color: "#8224e3" }} />
                Logout
              </div>
            </div>
          </div>
          <div className="details-data" onClick={() => navigate("./wishlist")}>
            <FavoriteBorder /> <div>Wishlist</div>
          </div>
          <div className="details-data" onClick={() => setSliderView(true)}>
            <ShoppingCartOutlined /> <div>Cart</div>
          </div>
          <SlidingPane
            width={"18.5%"}
            isOpen={sliderView}
            className={"reportTop_parent"}
            onRequestClose={() => {
              setSliderView(false);
            }}
          >
            <div className="report-slide-pane">
              <h3 className="report-slide-heading">Shopping Cart</h3>
              <div onClick={() => setSliderView(false)}>
                <Close className="report-slide-close-icon"></Close>
              </div>
            </div>
            <div className="sliderContent">
              <div className="shoppingBag-message-container">
                <div className="shoppingBag">
                  <ShoppingBagOutlined />
                </div>
                <div className="shoppingMessage">Shopping cart is empty!</div>
              </div>
              <Button className="continueShopping-btn">
                Continue Shopping
              </Button>
            </div>
          </SlidingPane>
        </div>
      </div>
      <div>
        <TabsComponent />
      </div>
      {/* <div className="landingPage-footer"></div> */}
    </div>
  );
};
export default LandingPage;
