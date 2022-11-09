import { Button } from "@mui/material";
import React from "react";

export const ItemList = ({ content }) => {
  return (
    <>
      <div className="mainTitle">
        {content.title}
      </div>
      {content.itemList.map((item) =>
        <Button
          fullWidth
          startIcon={<img src={item.url} className="imageRight" />}
          style={{
            display: "flex",
            justifyContent: "flex-start"
          }}
        >
          <div className="contentRight">
            <span className="title">{item.title}</span>
            <span className="company">{item.company}</span>
          </div>
        </Button>
      )}
      <div className="more">
        <Button
          style={{
            textTransform: "none",
            fontSize: "10px"
          }}
          variant="contained"
          size="small"
        >
          Xem thêm
        </Button>
      </div>
    </>
  );
}