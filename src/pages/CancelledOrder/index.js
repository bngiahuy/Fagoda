import React from "react";

// import Contact from "components/CancelledOrder/Contact";
import "./index.css";
import TourList from "components/CancelledOrder/TourList/TourList";

const CancelledOrder = () => {
  return (
    <div className="two-column">
      <TourList />
      {/* <Contact /> */}
    </div>
  );
};

export default CancelledOrder;
