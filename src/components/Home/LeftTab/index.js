import React, { useState } from "react";
import "./index.css";
import { ItemList } from "./ItemList";
import Inter from "../../../assets/Home/LeftTab/International.png";
import Domestic from "../../../assets/Home/LeftTab/domestic.png";
import Business from "../../../assets/Home/LeftTab/business.png";

export const LeftTab = () => {
  const [chosen, setChosen] = useState({ name: "Quốc Tế", index: 0 });

  const [international, setInternational] = useState({
    name: "Quốc Tế",
    url: Inter,
    listItem: ["Nhật Bản", "Lào", "Campuchia"],
    status: "open",
  });

  const [domestic, setDomestic] = useState({
    name: "Trong Nước",
    url: Domestic,
    listItem: ["Đà Lạt", "Nha Trang", "Ninh Bình"],
    status: "close",
  });

  const [business, setBusiness] = useState({
    name: "Doanh Nghiệp",
    url: Business,
    listItem: ["Phương Trang", "Thành Bưởi", "Một doanh nghiệp nào đấy"],
    status: "open",
  });

  return (
    <div className="leftTab">
      <ItemList
        content={international}
        setContent={setInternational}
        chosen={chosen}
        setChosen={setChosen}
      />
      <div className="seperator" />
      <ItemList
        content={domestic}
        setContent={setDomestic}
        chosen={chosen}
        setChosen={setChosen}
      />
      <div className="seperator" />
      <ItemList
        content={business}
        setContent={setBusiness}
        chosen={chosen}
        setChosen={setChosen}
      />
    </div>
  );
};
