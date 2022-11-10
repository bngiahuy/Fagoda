import React, { useState } from "react";
import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import cancel from "assets/CancelledOrder/remove.png";
import { Avatar } from "@mui/material";
import AVT from "assets/Header/user.png";

const Waiting = () => {
  // const columns = [
  //   { field: "id", headerName: "ID", width: 70 },
  //   { field: "firstName", headerName: "First name", width: 130 },
  //   { field: "lastName", headerName: "Last name", width: 130 },
  //   {
  //     field: "age",
  //     headerName: "Age",
  //     type: "number",
  //     width: 90,
  //   },
  //   {
  //     field: "fullName",
  //     headerName: "Full name",
  //     description: "This column has a value getter and is not sortable.",
  //     sortable: false,
  //     width: 160,
  //     valueGetter: (params) =>
  //       `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  //   },
  // ];

  const [listTour] = useState([
    {
      ID: "TO10075",
      quantity: 999,
      name: "Tour Hàn Quốc trọn gói (Seoul, đảo Nami,... ) - 5N4Đ",
      company: "Cty CP VIETNAM BOOKING",
      depart: "09/11/2022",
      location: "local",
    },
    {
      ID: "TO10075",
      quantity: 999,
      name: "Tour Hàn Quốc trọn gói (Seoul, đảo Nami,... ) - 5N4Đ",
      company: "Cty CP VIETNAM BOOKING",
      depart: "09/11/2022",
      location: "abroad",
    },
    {
      ID: "TO10075",
      quantity: 999,
      name: "Tour Hàn Quốc trọn gói (Seoul, đảo Nami,... ) - 5N4Đ",
      company: "Cty CP VIETNAM BOOKING",
      depart: "09/11/2022",
      location: "local",
    },
    {
      ID: "TO10075",
      quantity: 999,
      name: "Tour Hàn Quốc trọn gói (Seoul, đảo Nami,... ) - 5N4Đ",
      company: "Cty CP VIETNAM BOOKING",
      depart: "09/11/2022",
      location: "abroad",
    },
  ]);
  return (
    <>
      <div className="title">Các tour có yêu cầu chờ xử lý</div>
      <div className="waiting-content">
        <div className="subtitle">
          <ul>
            <li style={{ width: "100px" }}>Mã tour</li>
            <li style={{ width: "200px" }}>Số yêu cầu hủy</li>
            <li style={{ width: "300px" }}>Tour</li>
            <li style={{ width: "250px" }}>Đơn vị tổ chức</li>
            <li style={{ width: "150px" }}>Ngày khởi hành</li>
          </ul>
        </div>
        {listTour.map((item) => (
          <div className="each-tour">
            <div style={{ width: "100px" }} className="tour-detail">
              <Button> {item.ID}</Button>
            </div>
            <div style={{ width: "200px" }} className="tour-detail">
              <span>{item.quantity}</span>{" "}
              <img
                alt="waiting"
                src={cancel}
                style={{ width: "30px", height: "30px", marginLeft: "10px" }}
              />
            </div>
            <div style={{ width: "300px" }} className="tour-detail">
              <div className="tour-location">
                <div
                  className="location-detail"
                  style={{
                    border:
                      item.location === "abroad"
                        ? "2px solid #00B4D8"
                        : "2px solid #FFD700",
                    fontSize: "13px",
                  }}
                >
                  {item.location === "abroad" ? "QUỐC TẾ" : "TRONG NƯỚC"}
                </div>
                <div style={{ color: "#7C7C7C" }}>{item.name}</div>
              </div>
            </div>
            <div style={{ width: "250px" }} className="tour-detail">
              <div className="company-detail"></div>
              <Avatar alt="avatar" src={AVT} sx={{ width: 30, height: 30 }} />
              {item.company}
            </div>
            <div style={{ width: "150px" }} className="tour-detail">
              {item.depart}
            </div>
          </div>
        ))}
        {/* <DataGrid />*/}
      </div>
    </>
  );
};

export default Waiting;
