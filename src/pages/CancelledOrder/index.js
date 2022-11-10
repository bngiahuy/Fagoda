import React from "react";
import TourList from "../../components/CancelledOrder/TourList";
import { Contact } from "../../components/Home/RightTab/Contact";
import "./index.css";

const CancelledOrder = () => {
  return (
    <div className="two-column">
      <TourList />
      <Contact />
    </div>
  );
};

export default CancelledOrder;
