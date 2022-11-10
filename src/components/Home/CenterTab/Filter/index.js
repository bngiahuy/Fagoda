import React, { useState } from "react";
import filter from "assets/Home/CenterTab/filter.png";
import Add from "assets/Home/CenterTab/add.png";
import Delete from "assets/Home/CenterTab/delete.png";
import { IconButton } from "@mui/material";

export const Filter = () => {
  const [keyword, setKeyword] = useState(["Nhật Bản", "Ngẫu Nhiên"]);

  return (
    <div className="filter">
      <img alt="filter" src={filter} className="imageFilter" />
      <div className="titleFilter">Bộ lọc:</div>
      <div className="allFilter">
        {keyword.map((item) => (
          <div className="keyword">
            {item}
            <IconButton
              size="small"
              onClick={() =>
                setKeyword(keyword.filter((item_) => item_ != item))
              }
            >
              <img alt="delete" src={Delete} className="imageKeyword" />
            </IconButton>
          </div>
        ))}
      </div>
      <IconButton>
        <img alt="add" src={Add} className="imageKeyword" />
      </IconButton>
    </div>
  );
};
