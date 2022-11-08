import { Button } from "@mui/material";
import React from "react";
import "./index.css"
import BaNaHill from "assets/Home/RightTab/BaNaHill.jpg"

export const Advertisement = () => {
  return (
    <div className="advertisement">
      <Button
        fullWidth
        startIcon={<img src={BaNaHill} className="image" />}
      >
        Bà nà Hill
      </Button>
    </div>
  );
}