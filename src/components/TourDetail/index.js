import React, { useState } from 'react';
// import { makeStyles } from '@mui/styles';
import img from "assets/TourDetail/TourDetail.png";
// import { Filter } from '../Home/CenterTab/Filter';
import "./index.css";
import filledStar from "assets/Home/CenterTab/filledStar.png";
import emptyStar from "assets/Home/CenterTab/emptyStar.png";
import avt from "assets/Header/user.png";
import { Avatar, Button } from "@mui/material";
// import { useNavigate } from 'react-router-dom';
// import { orange } from '@mui/material/colors';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const tourData = {
    tourID: "TO1862",
    type: "Tour dài ngày",
    name: "Tour Nhật Bản: Tokyo - Yamanashi - Núi Phú Sĩ - 6N7Đ",
    rating: 4,
    numOfReview: 30,
    hostName: "Công ty ABC",
    image: img,
    descriptionTitle: "Trải nghiệm mùa đông tại xứ mặt trời mọc",
    description: "Hành trình khám phá cảnh sắc từ Tokyo đến Kyoto, kết nối Osaka với đền đài, chùa thiêng đẫm không khí thiền tịnh và các công trình xuyên biển vĩ đại tại Kobe. Nhật Bản là điểm đến nổi tiếng trên thế giới với nền văn hóa đậm bản sắc và ẩm thực độc đáo.",
    hightlight: ["Tham quan Nhật Bản trong 5 ngày 4 đêm",
        "Khám phá một trong những thành phố bận rộn nhất thế giới — Tokyo với các trung tâm mua sắm nổi tiếng như: Thành phố điện tử Akihabara, Trung tâm mua sắm Ami Premium Outlets,...",
        "Chụp hình với cảnh đẹp không thể thiếu khi đến với Nhật Bản, đó chính là Núi Phú Sĩ — ngọn núi cao nhất Nhật Bản so với mực nước biển là 3776 mét",
        "Viếng Chùa cổ Asakusa Kannon — ngôi đền linh thiêng và là một trong những ngôi đền cổ kính nhất hiện nay của Tokyo với kiến trúc truyền thống hết sức đặc trưng",
        "Trải nghiệm tắm Onsen — nét văn hóa độc đáo ở xứ sở hoa anh đào"],
    price: {
        default: "25.000.000 VND",
        adults: "30.000.000 VND",
        children: "25.000.000 VND",
    }
}

export const TourDetail = () => {
    const star = [0, 0, 0, 0, 0].fill(1, 0, Math.round(tourData.rating));
    // const navigate = useNavigate();
    const [numOfAdults, setNumOfAdults] = useState(0);
    const [numOfChildren, setNumOfChildren] = useState(0);
    const [date, setDate] = useState(null);
    const [vehicle, setVehicle] = useState();
    const handleChangeVehicle = (e) => {
        setVehicle(e.target.value);
    };
    const [room, setRoom] = useState();
    const handleChangeRoom = (e) => {
        setRoom(e.target.value);
    };
    return (
        <div className="container">
            {/* < Filter /> */}
            <div className="content">
                <div className="title-container">
                    <div className="type-of-tour">{tourData.type}</div>
                    <div className="name-of-tour">{tourData.name}</div>
                    <div className="rating">
                        <div className="star">
                            {star.map((item, index) =>
                                <img key={index} alt="filledStar" src={item ? filledStar : emptyStar} className="rating-star" />
                            )}
                        </div>
                        <div className="rating-number">{tourData.rating}/5</div>
                        <div className="review-number">{tourData.numOfReview} đánh giá</div>
                        <div className='host'>Đơn vị tổ chức:</div>
                        <div className="host-name">
                            <Button
                                startIcon={
                                    <Avatar alt="avatar" src={avt} sx={{ width: 20, height: 20 }} />
                                }
                                style={{
                                    fontSize: "12px",
                                    textTransform: "none",
                                    color: "black",
                                    fontWeight: "bold",
                                }}
                            >
                                {tourData.hostName}
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="image-for-tour">
                    <img src={tourData.image} alt="imageTour" className='image'></img>
                    <div className='content-title'>
                        <Button style={{
                            fontSize: "12px",
                            fontWeight: "bold",
                            textTransform: "none",
                            color: "black",
                        }}>Điểm nổi bật</Button>
                        <Button style={{
                            fontSize: "12px",
                            fontWeight: "bold",
                            textTransform: "none",
                            color: "black",
                        }}>Chương trình Tour</Button>
                        <Button style={{
                            fontSize: "12px",
                            fontWeight: "bold",
                            textTransform: "none",
                            color: "black",
                        }}>Loại phòng</Button>
                        <Button style={{
                            fontSize: "12px",
                            fontWeight: "bold",
                            textTransform: "none",
                            color: "black",
                        }}>Đánh giá</Button>
                        <Button style={{
                            fontSize: "12px",
                            fontWeight: "bold",
                            textTransform: "none",
                            color: "black",
                        }}>Mã Tour: {tourData.tourID}</Button>
                    </div>
                </div>
                <div className='overview'>
                    <div className="description">
                        <div className="description-title">{tourData.descriptionTitle}</div>
                        <div className="description-content">{tourData.description}</div>
                        <div className="hightlight-title">Điểm nổi bật</div>
                        <ul>
                            {tourData.hightlight.map((item) =>
                                <li className="hightlight-content">{item}</li>
                            )}
                        </ul>
                    </div>
                    <div className="price-box">
                        <div className="price-adv-box">
                            <div className="price-title">
                                Giá chỉ từ <span className='price-advertising'>25.000.000 VND</span>
                                <div style={{ fontStyle: "italic", fontSize: "12px" }}>1 người</div>
                            </div>
                            <div className='button'>
                                <Button style={{
                                    fontSize: "15px",
                                    textTransform: "none",
                                    fontWeight: "bold",
                                    backgroundColor: "orange",
                                    color: "white",
                                }}>Đặt ngay</Button>
                                <Button style={{
                                    marginTop: "10px",
                                    fontSize: "15px",
                                    textTransform: "none",
                                    fontWeight: "bold",
                                    backgroundColor: "red",
                                    color: "white"
                                }}>Tư vấn</Button>
                            </div>
                        </div>
                        <div className="guest">Số khách</div>
                        <div className="guest-detail">
                            <div className="adults">
                                Người lớn <span style={{ fontWeight: "bold" }}>x30tr VND</span>
                                <Button style={{ fontSize: "12px", color: "black" }} size="small" onClick={() => {
                                    numOfAdults === 0 ? setNumOfAdults(0) : setNumOfAdults(numOfAdults - 1);

                                }}>-</Button>
                                {numOfAdults}
                                <Button style={{ fontSize: "12px", color: "black" }} size="small" onClick={() => {
                                    setNumOfAdults(numOfAdults + 1);
                                }}>+</Button>
                            </div>
                            <div className="children">
                                Trẻ em <span style={{ fontWeight: "bold" }}>x25tr VND</span>
                                <Button style={{ fontSize: "12px", color: "black" }} size="small" onClick={() => {
                                    numOfChildren === 0 ? setNumOfChildren(0) : setNumOfChildren(numOfChildren - 1);

                                }}>-</Button>
                                {numOfChildren}
                                <Button style={{ fontSize: "12px", color: "black" }} size="small" onClick={() => {
                                    setNumOfChildren(numOfChildren + 1);
                                }}>+</Button>
                            </div>
                        </div>
                        <div className='vehicle-and-room'>
                            <div className='vehicle-box'>
                                <div className="vehicle">
                                    Phương tiện:

                                </div>
                                <select value={vehicle} onChange={handleChangeVehicle} style={{ width: "80px" }}>
                                    <option value="Plane">Plane</option>
                                    <option value="Bus">Bus</option>
                                    <option value="Train">Train</option>
                                </select>
                            </div>
                            <div className='room-box'>
                                <div className="room">
                                    Loại phòng:

                                </div>
                                <select value={room} onChange={handleChangeRoom} style={{ width: "80px" }}>
                                    <option value="Loại 1">Loại 1</option>
                                    <option value="Loại 2">Loại 2</option>
                                    <option value="Loại 3">Loại 3</option>
                                </select>
                            </div>
                        </div>
                        <div className="date-to-start">
                            Ngày khởi hành:
                        </div>
                        <DatePicker selected={date} onChange={(selectedDate) => setDate(selectedDate)} />
                        <div className="total-price">
                            Tổng tiền: <span style={{
                                textAlign: "right",
                                color: "#A71717",
                                fontSize: "18px",
                                fontWeight: "bold"
                            }}>{(numOfAdults * 30 + numOfChildren * 25 === 0) ? "0 VND" : (numOfAdults * 30 + numOfChildren * 25 + ".000.000 VND")}</span>
                        </div>
                    </div>
                </div>
                <span style={{ fontWeight: "bold", color: "black", fontSize: "15px", marginTop: "20px" }} >Chương trình tour</span>
                <div className='tour-details'>
                    <span style={{ fontWeight: "bold", color: "black", fontSize: "13px", marginLeft: "10px" }} >Lịch trình</span>
                </div>
                <span style={{ fontWeight: "bold", color: "black", fontSize: "15px", marginTop: "20px" }} >Loại phòng ở</span>
                <div className="type-of-room">

                </div>
                <span style={{ fontWeight: "bold", color: "black", fontSize: "15px", marginTop: "20px" }} >Đánh giá</span>
                <div className="review">

                </div>
            </div>
        </div >
    );
}