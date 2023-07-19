import React, { Component, useState } from "react";
import { render } from "react-dom";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { useRecoilState } from "recoil";
import { sliderStatus } from "../../components/recoil/atoms/Atoms";

const Cart = () => {
  const [sliderView, setSliderView] = useRecoilState(sliderStatus)
  console.log("cart", state)
  return (
    <div>
       <button onClick={() => setSliderView(false)}>
        Click me to open right pane!
      </button>
      <SlidingPane
        className="some-custom-class"
        overlayClassName="some-custom-overlay-class"
        isOpen={sliderView}
        title="Hey, it is optional pane title.  I can be React component too."
        subtitle="Optional subtitle."
        onRequestClose={() => {
          // triggered on "<" on left top click or on outside click
          setState({ isPaneOpen: false });
        }}
      >
        <div>And I am pane content. BTW, what rocks?</div>
        <br />
        <img src="img.png" />
      </SlidingPane>
    </div>
  );
};

export default Cart;
