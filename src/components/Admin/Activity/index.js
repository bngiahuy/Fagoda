import React, { useState } from "react";
import dayjs from 'dayjs';
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import { saveAs } from 'file-saver';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const useStyles = makeStyles(() => ({
  container: {},
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "39px 20px",
  },
  title: {
    color: "#03045E",
    fontSize: "1.2em",
  },
  dateAndLog: {
    height: "40px",
    justifyContent: "center",
  },
  content: {
    marginLeft: "20px",
    border: "1px solid #00B4D8",
    borderRadius: "20px",
    width: "1200px",
    height: "600px",
    padding: "10px",
  },
}));

const Activity = () => {
  var FileSaver = require('file-saver');
  const styles = useStyles("Xuất hoạt động lúc: ", Date.now());
  const [content, setContent] = useState('');
  const [value, setValue] = useState();
  const [activities, setActivities] = useState([
    {
      id: 13634,
      time: "12:00:00",
      date: "16/12/2002",
      type: "đăng bài viết",
      user: "Nguyễn Thanh Hải",
      post: "Khám phá Nha Trang 3 ngày 2 đêm",
    },
    {
      id: 13635,
      time: "12:00:00",
      date: "16/12/2002",
      type: "bình chọn",
      user: "Nguyễn Xuân Mạnh",
      post: "Khám phá Nha Trang 3 ngày 2 đêm",
    },
    {
      id: 13636,
      time: "12:00:00",
      date: "16/12/2002",
      type: "thêm vào giỏ hàng",
      user: "Nguyễn Hoàng Bảo Hùng",
      post: "Khám phá Nha Trang 3 ngày 2 đêm",
    },
    {
      id: 13637,
      time: "12:00:00",
      date: "16/12/2002",
      type: "thanh toán",
      user: "Nguyễn Hoàng Bảo Hùng",
      post: "Khám phá Nha Trang 3 ngày 2 đêm",
    },
    {
      id: 13634,
      time: "12:00:00",
      date: "16/12/2002",
      type: "đăng bài viết",
      user: "Nguyễn Thanh Hải",
      post: "Khám phá Nha Trang 3 ngày 2 đêm",
    },
    {
      id: 13635,
      time: "12:00:00",
      date: "16/12/2002",
      type: "bình chọn",
      user: "Nguyễn Xuân Mạnh",
      post: "Khám phá Nha Trang 3 ngày 2 đêm",
    },
    {
      id: 13636,
      time: "12:00:00",
      date: "16/12/2002",
      type: "thêm vào giỏ hàng",
      user: "Nguyễn Hoàng Bảo Hùng",
      post: "Khám phá Nha Trang 3 ngày 2 đêm",
    },
    {
      id: 13637,
      time: "12:00:00",
      date: "16/12/2002",
      type: "thanh toán",
      user: "Nguyễn Hoàng Bảo Hùng",
      post: "Khám phá Nha Trang 3 ngày 2 đêm",
    },
    {
      id: 13634,
      time: "12:00:00",
      date: "16/12/2002",
      type: "đăng bài viết",
      user: "Nguyễn Thanh Hải",
      post: "Khám phá Nha Trang 3 ngày 2 đêm",
    },
    {
      id: 13635,
      time: "12:00:00",
      date: "16/12/2002",
      type: "bình chọn",
      user: "Nguyễn Xuân Mạnh",
      post: "Khám phá Nha Trang 3 ngày 2 đêm",
    },
    {
      id: 13636,
      time: "12:00:00",
      date: "16/12/2002",
      type: "thêm vào giỏ hàng",
      user: "Huỳnh Hoàng Khang",
      post: "Khám phá Nha Trang 3 ngày 2 đêm",
    },
    {
      id: 13637,
      time: "12:00:00",
      date: "16/12/2002",
      type: "thanh toán",
      user: "Huỳnh Hoàng Khang",
      post: "Khám phá Nha Trang 3 ngày 2 đêm",
    },
  ]);

  const handleChangeDate = (newValue) => {
    setValue(newValue)
  }
  const handleDownloadLog = () => {
    var blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    FileSaver.saveAs(blob, "log.txt");
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>HOẠT ĐỘNG</h3>
        <div className={styles.dateAndLog}>
          <LocalizationProvider dateAdapter={AdapterDayjs} >
            <DesktopDatePicker
              label="Ngày"
              inputFormat="DD/MM/YYYY"
              value={value}
              onChange={handleChangeDate}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <Button style={{marginLeft: 5}} variant="contained" onClick={handleDownloadLog}>Log</Button>
        </div>
      </div>
      <div className={styles.content}>
        {activities.map((activity) => (
          <p style={{margin: 15}}>
            #{activity.id} {activity.time}, {activity.date}: {activity.user} {" "} 
          <b style={{ color: "#00B4D8" }}>{activity.type}</b> on{" "}
            <i>{activity.post}</i>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Activity;
