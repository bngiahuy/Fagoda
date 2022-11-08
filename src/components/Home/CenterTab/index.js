import React from "react";
import { Filter } from "./Filter";
import "./index.css"

export const CenterTab = () => {
  return (
    <div className="centerTab">
      <Filter />
      <div className="newsfeed">
        Đây là chỗ để newsfeed
      </div>
    </div>
  );
}