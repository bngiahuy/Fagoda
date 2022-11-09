import React, { useState } from "react";
import { Button } from "@mui/material";

const Waiting = () => {
  const [listTour, setListTour] = useState([
    {
      ID: "TO10075",
      quantity: 999,
      name: "abc",
      company: "xyz",
      depart: "09/11/2022",
    },
    {
      ID: "TO10075",
      quantity: 999,
      name: "abc",
      company: "xyz",
      depart: "09/11/2022",
    },
    {
      ID: "TO10075",
      quantity: 999,
      name: "abc",
      company: "xyz",
      depart: "09/11/2022",
    },
    {
      ID: "TO10075",
      quantity: 999,
      name: "abc",
      company: "xyz",
      depart: "09/11/2022",
    },
  ]);
  return (
    <>
      <div className="title">Các tour có yêu cầu chờ xử lý</div>
      <div className="subtitle">
        <ul>
          <li>Mã tour</li>
          <li>Số yêu cầu hủy</li>
          <li>Tên tour</li>
          <li>Đơn vị tổ chức</li>
          <li>Ngày khởi hành</li>
        </ul>
      </div>
      {listTour.map((item) => (
        <div className="each-tour">
          <span>{item.ID}</span>
          <span>{item.quantity}</span>
          <span>{item.name}</span>
          <span>{item.company}</span>
          <span>{item.depart}</span>
        </div>
      ))}
    </>
  );
};

export default Waiting;
