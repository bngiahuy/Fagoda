import { Button } from "@mui/material";
import React from "react";

export const ItemList = ({ content }) => {
  return (
    <>
      <div className="mainTitleRightTab">{content.title}</div>
      {content.itemList.map((item) => (
        <Button
          fullWidth
          startIcon={<img src={item.url} className="imageRightTab" />}
          style={{
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <div className="contentRightTab">
            <span className="titleRightTab">{item.title}</span>
            <span className="companyRightTab">{item.company}</span>
          </div>
        </Button>
      ))}
      <div className="moreRightTab">
        <Button
          style={{
            textTransform: "none",
            fontSize: "10px",
          }}
          variant="contained"
          size="small"
        >
          Xem thêm
        </Button>
      </div>
    </>
  );
};
