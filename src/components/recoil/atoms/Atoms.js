import React from "react";
import { atom } from "recoil";
const sliderStatus = atom({
    key: "sliderStatus",
    default: false,
  });
  export { sliderStatus };