import React from "react";
import DropDown from "../../../../assets/Home/LeftTab/DropDown.png";
import { Button } from "@mui/material";

export const ItemList = ({ content, setContent, chosen, setChosen }) => {
  return (
    <>
      <Button
        startIcon={
          <img
            src={DropDown}
            className="imageLeft"
            style={{
              transform:
                content.status === "open" ? "rotate(0deg)" : "rotate(-90deg)",
            }}
          />
        }
        onClick={() =>
          setContent({
            ...content,
            status: content.status === "open" ? "close" : "open",
          })
        }
        fullWidth
        style={{
          display: "flex",
          justifyContent: "flex-start",
        }}
        size="large"
      >
        <div className="titleLeft">{content.name}</div>
      </Button>
      <div className="itemList">
        {content.status === "open" &&
          content.listItem.map((item, index) => (
            <Button
              startIcon={
                <img
                  src={content.url}
                  style={{ width: "20px", height: "20px" }}
                />
              }
              fullWidth
              style={{
                display: "flex",
                justifyContent: "flex-start",
              }}
              size="large"
              variant={
                content.name === chosen.name && index === chosen.index
                  ? "contained"
                  : "text"
              }
              onClick={() => setChosen({ name: content.name, index: index })}
            >
              <div
                className="contentLeft"
                style={{
                  color:
                    content.name === chosen.name && index === chosen.index
                      ? "white"
                      : "black",
                }}
              >
                {item}
              </div>
            </Button>
          ))}
      </div>
    </>
  );
};
