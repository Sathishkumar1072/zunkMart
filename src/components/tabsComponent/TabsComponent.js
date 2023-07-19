import React from "react";
import "./TabsComponent.css";
import Gallery from "../gallery/Gallery";
import DropDownPopper from "../dropDownPopper/DropDownPopper";
import { useNavigate } from 'react-router-dom'

const TabsComponent = () => {
  const navigate = useNavigate()
  return (
    <div className="tabsAndGallery">
      <div className="tabsComponent-Container">
        <div className="categories"><DropDownPopper /></div>
        <div className="otherTabs-container">
          <div onClick={()=>navigate('/')} className="tabsField">Home</div>
          <div  onClick={()=>navigate('/contact')} className="tabsField" >Contact us</div>
          <div  onClick={()=>navigate('/account')} className="tabsField" >My Account</div>
          <div  onClick={()=>navigate('/refund')} className="tabsField" >Refund and Returs Policy</div>
        </div>
      </div>
      {/* <div>
        <Gallery />
      </div> */}
    </div>
  );
};

export default TabsComponent;
