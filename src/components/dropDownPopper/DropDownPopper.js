import React from "react";
import "./DropDownPopper.css";
import MenuIcon from '@mui/icons-material/Menu';

const DropDownPopper = () => {
  return (
    <div class="dropDownPopper-container">
      <div class="dropdown">
        <button class="dropbtn">Shopping By Categories</button>
        <div class="dropdown-content">
          <a href="#">Men</a>
          <a href="#">Women</a>
        </div>
      </div>
      <div className="menuIcon"><MenuIcon classes= {'menuIcon'}/></div>
    </div>
  );
};
export default DropDownPopper;
