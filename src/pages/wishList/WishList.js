import React from "react";
import "./WishList.css";
import CloseIcon from "@mui/icons-material/Close";
import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import filter from "@inovua/reactdatagrid-community/filter";
import { Button } from "@mui/material";
import mobilePhone from "../../asserts/Mobile.png";
import {
  Facebook,
  Twitter,
  MarkunreadOutlined,
  WhatsApp,
  Pinterest,
} from "@mui/icons-material";

const gridStyle = { minHeight: 330 };

const WishList = () => {
  const dataSource = [
    {
      productName: { productURL: mobilePhone, productName: "VIVO V27 5G" },
      unitPrize: "From: ₹36,999.00 From: ₹31,999.00",
      stockStatus: "In Stock",
    },
    {
      productName: { productURL: mobilePhone, productName: "VIVO X90" },
      unitPrize: "From: ₹64,999.00 From: ₹63,999.00",
      stockStatus: "Out of Stock",
    },
    {
      productName: { productURL: mobilePhone, productName: "VIVO V27 5G" },
      unitPrize: "From: ₹64,999.00 From: ₹63,999.00",
      stockStatus: "In Stock",
    },
    {
      productName: { productURL: mobilePhone, productName: "VIVO X90" },
      unitPrize: "From: ₹64,999.00 From: ₹63,999.00",
      stockStatus: "Out of Stock",
    },
  ];

  const columns = [
    {
      name: "cancel",
      header: "",
      defaultWidth: 100,
      render: ({ value }) => <CloseIcon fontSize="medium" class="cancelIcon" />,
    },
    {
      name: "productName",
      header: "Product Name",
      defaultFlex: 1,
      render: ({ value }, { cellProps }) => {
        const cellValue = cellProps?.data?.productName?.productName;
        console.log("cellValue", cellProps, cellValue);
        return (
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <img height={30} width={30} src={mobilePhone} /> {cellValue}
          </div>
        );
      },
    },
    { name: "unitPrize", header: "Unit Prize", defaultFlex: 1 },
    {
      name: "stockStatus",
      header: "Stock Status",
      // minWidth: 100,
      defaultFlex: 1,
      // render: ({ data }) => data.firstName + " " + data.lastName,
    },
    {
      name: "selectOptions",
      header: "",
      defaultWidth: 150,
      // defaultFlex: 1,
      render: ({ value }) => (
        <Button className="selectOptions-btn">Select Options</Button>
      ),
    },
  ];
  return (
    <div className="wishList-container">
      <div></div>

      <div className="reactDataGrid_parent">
        <ReactDataGrid
          idProperty="id"
          style={gridStyle}
          rowHeight={49}
          // enableFiltering={enableFiltering}
          // defaultFilterValue={defaultFilterValue}
          columns={columns}
          dataSource={dataSource}
          // onFilterValueChange={onFilterValueChange}
          reorderColumns={false}
          sortable={false}
          resizable={false}
          showCellBorders="horizontal"
          showActiveRowIndicator={false}
          // pagination={true}
          // emptyText={GridData.length === 0 ? "No Records Found" : "No matching records found" }
          // pageSizes={[5, 10]}
          defaultLimit={10}
          // loading={loadingStatus}
          loadingText="Loading..."
        />
        <div className="shareItems-container">
          <div className="shareOn-text">Share on: </div>
          <div>
            <Facebook
              // style={{ backgroundColor: "#39599e" }}
              className="faceBook-Icon"
            />
          </div>
          <div style={{ backgroundColor: "#45afe2" }} className="twitter-Icon">
            <Twitter sx={{ color: "white", fontSize: 20 }} />
          </div>
          <div style={{ backgroundColor: "#ab2e31" }} className="Pinterest-Icon">
            <Pinterest />
          </div>
          <div style={{ backgroundColor: "#fbb102" }} className="mail-Icon">
            <MarkunreadOutlined />
          </div>
          <div>
            <WhatsApp style={{ backgroundColor: "#00a901" }} className="whatsApp-Icon" />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default WishList;
