import React, { useEffect, useState } from "react";
import AVT from "assets/Home/RightTab/avatar.png";
import { Avatar, Button } from "@mui/material";
import { getUserData } from "helpers/firebase/db";

export const Contact = ({ userData }) => {
  const [data, setData] = useState([]);
  // const [currentChat, setCurrentChat] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setData(await Promise.all(userData.listFriends
        .map(async (item) => await getUserData(item))));
    };

    fetchData();
  }, [])

  return (
    <>
      <div className="mainTitleRightTab">Người liên hệ</div>
      {data && data.map((item) => (
        <Button
          key={item.uid}
          fullWidth
          startIcon={
            <Avatar
              alt={item.fullName}
              src={item.photoUrl || AVT}
              sx={{ width: 30, height: 30 }}
            />
          }
          style={{
            display: "flex",
            justifyContent: "flex-start",
            fontSize: "13px",
            textTransform: "none",
            color: "black",
          }}
        >
          {item.fullName}
        </Button>
      ))}
    </>
  );
};
