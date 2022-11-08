import React, { useState } from "react";
import AVT from "assets/Home/RightTab/avatar.png"
import { Avatar, Button } from "@mui/material";

export const Contact = () => {
  const [listFriend, setListFriend] = useState([
    {
      url: AVT,
      name: "Hoàng Nhật Hà"
    },
    {
      url: AVT,
      name: "Nguyễn Nhật Anh"
    },
    {
      url: AVT,
      name: "Nguyễn Xuân Mạnh"
    },
    {
      url: AVT,
      name: "Bùi Nguyễn Gia Huy"
    }
  ]);

  return (
    <div className="contact">
      <div className="mainTitle">
        Người liên hệ
      </div>
      {listFriend.map((item) =>
        <Button
          fullWidth
          startIcon={
            <Avatar alt={item.name} src={item.url} sx={{ width: 30, height: 30 }} />
          }
          style={{
            display: "flex",
            justifyContent: "flex-start",
            fontSize: "13px",
            textTransform: "none",
            color: "black"
          }}
        >
          {item.name}
        </Button>
      )}
    </div>
  );
}