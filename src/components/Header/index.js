import React, { useEffect, useState } from "react";
import "./index.css";
import Logo from "assets/Header/logo.png";
import AVT from "assets/Header/user.png";
import Search from "assets/Header/search.png";
import Notification from "assets/Header/notification.png";
import Messages from "assets/Header/messages.png";
import Cart from "assets/Header/cart.png";
import Setting from "assets/Header/setting.png";
import Logout from "assets/Header/logout.png";
import Login from "assets/Header/login.png";
import {
  Avatar,
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { logOut } from "helpers/firebase/auth";

export const Header = ({ userData }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [enable, setEnable] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ]);

  useEffect(() => {
    if (
      pathname === "/home" ||
      pathname === "/profile" ||
      pathname === "/cancelled_order"
    )
      setEnable([true, true, true, true, true, true, true]);
    else if (pathname === "/signin" || pathname === "/signup")
      setEnable([false, false, false, false, false, false, false]);
    else if (pathname === "/admin")
      setEnable([false, false, false, false, false, true, true]);
  }, [pathname]);

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

      {enable[0] && userData && (
        <Button
          startIcon={
            <Avatar
              alt="avatar"
              src={userData.photoUrl || AVT}
              sx={{ width: 30, height: 30 }}
            />
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
          {userData.fullName}
        </Button>
      )}

      {enable[1] && (
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
      )}

      {enable[2] && (
        <IconButton style={{ position: "fixed", right: "220px" }}>
          <img alt="logout" src={Notification} className="imageHeader" />
        </IconButton>
      )}

      {enable[3] && (
        <IconButton style={{ position: "fixed", right: "170px" }}>
          <img alt="messages" src={Messages} className="imageHeader" />
        </IconButton>
      )}

      {enable[4] && (
        <IconButton
          style={{ position: "fixed", right: "120px" }}
          onClick={() => navigate("/cancelled-order")}
        >
          <img alt="cart" src={Cart} className="imageHeader" />
        </IconButton>
      )}

      {enable[5] && (
        <IconButton style={{ position: "fixed", right: "70px" }}>
          <img alt="setting" src={Setting} className="imageHeader" />
        </IconButton>
      )}

      {enable[6] && (
        <IconButton
          style={{ position: "fixed", right: "20px" }}
          onClick={() => {
            if (userData) {
              logOut();
            } else {
              navigate("/signin");
            }
          }}
        >
          <img
            alt="logout"
            src={userData ? Logout : Login}
            className="imageHeader"
          />
        </IconButton>
      )}
    </div>
  );
};
