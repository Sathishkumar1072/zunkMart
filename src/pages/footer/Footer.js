import React from "react";
import "./Footer.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import paymentMethods from "../../asserts/payments-logo.png";

const Footer = () => {
  return (
    <div className="footer-Container">
      <div className="shareProperties">
        <div class="twitterIcon-container">
          <TwitterIcon sx={{ color: "white", fontSize: 20 }} />
        </div>
        <div class="instaIcon-container">
          <InstagramIcon style={{ fontSize: 20, color: "white" }} />
        </div>
      </div>
      <div className="paymentMethod-copyrights">
        <div className="paymentMethods-container">
          <img src={paymentMethods} alt="paymentLogo" />
        </div>
        <div className="copyrightsContainer">
          Zunkmart © 2023 by <p className="compName">ZUNK Lifestyle Pvt Ltd.</p> All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
