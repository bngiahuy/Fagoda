import React from "react";
import "./index.css"
import { Advertisement } from "./Advertisement";
import { Promotion } from "./Promotion";
import { Contact } from "./Contact";

export const RightTab = () => {
  return (
    <div className="rightTab">
      <Advertisement />
      <div className="seperator" />
      <Promotion />
      <div className="seperator" />
      <Contact />
    </div>
  );
}