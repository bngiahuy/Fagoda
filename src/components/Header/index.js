import React from "react";
import "./index.css";
import Logo from "assets/Header/logo.png";
import AVT from "assets/Header/user.png";
import Search from "assets/Header/search.png";
import Notification from "assets/Header/notification.png";
import Messages from "assets/Header/messages.png";
import Cart from "assets/Header/cart.png";
import Setting from "assets/Header/setting.png";
import Logout from "assets/Header/logout.png";
import {
  Avatar,
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <IconButton
        style={{
          position: "fixed",
          left: "0",
          backgroundColor: "transparent",
        }}
      >
        <img
          alt="logo"
          src={Logo}
          className="logoHeader"
          onClick={() => navigate("/home")}
        />
      </IconButton>
      <Button
        startIcon={
          <Avatar alt="avatar" src={AVT} sx={{ width: 30, height: 30 }} />
        }
        style={{
          fontSize: "13px",
          textTransform: "none",
          color: "black",
          position: "fixed",
          left: "150px",
        }}
        onClick={() => navigate("/profile")}
      >
        Johnny Nguyễn
      </Button>
      <div className="searchFagoda">
        <TextField
          variant="standard"
          InputProps={{
            startAdornment: (
              <InputAdornment>
                <img
                  alt="search"
                  src={Search}
                  className="imageHeader"
                  style={{ margin: "0 10px" }}
                />
              </InputAdornment>
            ),
            disableUnderline: true,
          }}
          placeholder="Tìm kiếm trên Fagoda"
        />
      </div>
      <IconButton style={{ position: "fixed", right: "220px" }}>
        <img alt="logout" src={Notification} className="imageHeader" />
      </IconButton>
      <IconButton style={{ position: "fixed", right: "170px" }}>
        <img alt="messages" src={Messages} className="imageHeader" />
      </IconButton>
      <IconButton
        style={{ position: "fixed", right: "120px" }}
        onClick={() => navigate("/cancelled_order")}
      >
        <img alt="cart" src={Cart} className="imageHeader" />
      </IconButton>
      <IconButton style={{ position: "fixed", right: "70px" }}>
        <img alt="setting" src={Setting} className="imageHeader" />
      </IconButton>
      <IconButton style={{ position: "fixed", right: "20px" }}>
        <img alt="logout" src={Logout} className="imageHeader" />
      </IconButton>
    </div>
  );
};
