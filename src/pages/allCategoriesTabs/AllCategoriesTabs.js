import React, { useState } from 'react';
import TShirts from '../../components/custom/categoriesTab/tshirts/Tshirts';
import "./AllCategories.css";
import Accessories from '../../components/custom/categoriesTab/accessories/Accessories';
import Mobiles from '../../components/custom/categoriesTab/mobiles/Mobiles';



const tabsData = [
  { title: 'T-shirts', content: <TShirts/> },
  { title: 'Accessories', content: <Accessories /> },
  { title: 'Mobiles', content: <Mobiles /> }
];

const AllCategories = () => {
  const [activeTab, setActiveTab] = useState(0);

  const changeTab = (index) => {
    setActiveTab(index);
  };

  return (
    <div className='tabCategories-container'>
      <div className="tab-header">
        {tabsData.map((tab, index) => (
          <div
            key={index}
            className={`tab-item ${index === activeTab ? 'active' : ''}`}
            onClick={() => changeTab(index)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div className="tab-content">
        {tabsData[activeTab].content}
      </div>
    </div>
  );
}

export default AllCategories;