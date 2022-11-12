import React from "react";
import "./Profile.css";
import { RightTab } from "../../components/Home/RightTab";
import { LeftTab } from "../../components/Home/LeftTab";
import CoverKhachHang from "assets/Profile/AnhBiaKhachHang.jpg";
import avatar from "assets/Profile/avatar.jpg";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TourIcon from "@mui/icons-material/Tour";
import MovingIcon from "@mui/icons-material/Moving";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";

export default function Profile() {
  return (
    <div className="profile">
      <LeftTab />
      {/* <div className='content'>
          <div>
            <img className='cover-img' src={CoverKhachHang}></img>
            <span >
              <p id='name-user'>Huy Bùi</p>
              </span>

          </div>
            <div idName='avatar-circle'>
            <img className='avatar' src={avatar}></img>
            </div>

            
        </div> */}

      <div id="profile-upper">
        <div id="profile-banner-image">
          <img src={CoverKhachHang} alt="Cover"></img>
        </div>
        <div id="profile-d">
          <div id="profile-pic">
            <img src={avatar} alt="Avatar"></img>
          </div>
          <div id="u-name">Huy Bùi</div>

          <div className="short-info">
            <CalendarMonthIcon
              style={{
                fill: "#20ECBB",
                marginRight: "7px",
              }}
            />
            Tham gia từ 27/10/2022
          </div>
          <div className="short-info">
            <TourIcon
              style={{
                color: "20ECBB",
                marginRight: "7px",
              }}
            />
            Đã tham gia 10 chuyến đi
          </div>
          <div className="short-info">
            <MovingIcon
              style={{
                color: "20ECBB",
                marginRight: "7px",
              }}
            />
            Các địa điểm đã đến
          </div>
          <div className="short-info">
            <span id="abroad">QUỐC TẾ</span>
            <span
              style={{
                fontSize: "15px",
              }}
            >
              Nhật Bản, Hàn Quốc
            </span>
          </div>
          <div className="short-info">
            <span id="not-abroad">TRONG NƯỚC</span>
            <span
              style={{
                fontSize: "15px",
              }}
            >
              Ninh Bình, Hạ Long, Hà Nội, Hồ Chí Minh
            </span>
          </div>
        </div>
        <div id="ContactInfo">
          <span
            style={{
              padding: "9px",
              marginLeft: "15px",
              position: "absolute",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Thông tin liên hệ
          </span>
          {/* <span style={{
                position: "absolute",
                marginLeft: "300px",
                fontSize: "13px",
              }}>
                <PlaceOutlinedIcon />
                Thủ Đức, Hồ Chí Minh
              </span> */}
        </div>
      </div>
      <RightTab />
    </div>
  );
}
