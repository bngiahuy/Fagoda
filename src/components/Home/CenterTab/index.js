import React, { useState } from "react";
import { Filter } from "./Filter";
import "./index.css"
import { Post } from "./Post";
import daisenMountain from "assets/Home/CenterTab/daisenMountain.jpg"
import AVT from "assets/Home/CenterTab/user.png";

export const CenterTab = () => {
  const [posts, setPosts] = useState([
    {
      url: daisenMountain,
      title: "NHẬT BẢN - ĐỊA ĐIỂM ĐƯỢC YÊU THÍCH NHẤT NĂM 2069",
      content: "Nhắc đến Nhật Bản, hình ảnh đầu tiên hiện lên trong tâm trí của bạn đó là hình ảnh Hoa Anh Đào và Núi Phú Sĩ. Ngoài những khu đô thị phồn thịnh ai cũng muốn ghé đến thăm như ...Xem thêm",
      hashtag: ["Anime", "Wibu forever"],
      tour: [
        {
          day: 6,
          night: 7,
          start: "Thứ 2 hàng tuần",
          vehicle: "Máy bay",
          price: 69000000
        },
        {
          day: 8,
          night: 9,
          start: "Thứ 2 hàng tuần",
          vehicle: "Tàu thủy",
          price: 96000000
        }
      ],
      avatar: AVT,
      company: "Công ty Du lịch Bảo Hùng",
      time: "69 ngày",
      star:[1,1,1,1,0],
      upvote: 15,
      downvote: 12,
      numComment: 50,
      comment: [
        {
          url: AVT,
          name: "Nguyễn Xuân Mạnh",
          content: "Chuyến đi rất tuyệt vời, tôi và ny đã có những trải nghiệm khó quên",
          star: 5,
          like: 96,
          isLiked: true
        },
        {
          url: AVT,
          name: "Nguyễn Nhật Anh",
          content: "Thật xink đmẹp, Nhật Bản - đất nước tiệt dời.",
          star: 4.8,
          like: 69,
          isLiked: false
        }
      ]
    }
  ])

  return (
    <div className="centerTab">
      <Filter />
      <div className="newsfeed">
        <Post post={posts[0]} />
      </div>
    </div>
  );
}