import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import Chart from 'react-apexcharts'
import Activity from '../Activity';

import Post from 'assets/Admin/post.png'
import Business from 'assets/Admin/business.png'
import User from 'assets/Admin/user.png'

const useStyles = makeStyles(() => ({
  container: {
    width: "85vw",
    padding: "10px",
  },
  icons: {
    width: "35px"
  },
  widgetContainer: {
    width: "100%",
    height: "10vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  widget: {
    width: "20%",
    borderRadius: '10px',
    boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)",
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    display: 'flex',
  },
  content: {
    display: "grid",
    width: "1200px",
    height: "600px",
    margin: "20px 0 0 20px",
    padding: "10px",
    // border: "1px solid #00B4D8",
    gridTemplateColumns: "3fr 1fr",
    gridTemplateRows: "1fr",
    borderRadius: "20px",
    gap: "10px",
  },
  box: {
    display: "grid",
    width: "100%",
    height: "100%",
    minHeight: 400,
    borderRadius: '10px',
    boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)",
    textAlign: 'center',
  },
  contentBox: {
    display: "grid",
    padding: '5px',
    borderRadius: '10px',
    boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)",
    overflow: 'hidden',
  },
  report: {
    paddingLeft: '20%'
  },
  circleBackground: {
    width: "40px",
    height: "40px",
    borderRadius: '50%',
    textAlign: "center",
    fontSize: "1.4em",
    color: "white",
    fontWeight: "bold",
    padding: "2px",
    display: "inline-block",
  }
}));

const MainPage = () => {
  const styles = useStyles();
  const series = [{
    name: "Access",
    data: [100, 411, 354, 513, 492, 342, 669, 931, 548, 731, 412, 622]
  }];
  const options = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
    },
    title: {
      text: 'Truy c???p trong th??ng',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    }
  };
  const [activities, setActivities] = useState([
    {
      id: 13634,
      time: "12:00:00",
      date: "12/12/2002",
      type: "post",
      user: "Nguy???n Ho??ng B???o H??ng",
      post: "Kh??m ph?? Nha Trang 3 ng??y 2 ????m",
    },
    {
      id: 13635,
      time: "12:00:00",
      date: "12/12/2002",
      type: "like",
      user: "Nguy???n Ho??ng B???o H??ng",
      post: "Kh??m ph?? Nha Trang 3 ng??y 2 ????m",
    },
    {
      id: 13636,
      time: "12:00:00",
      date: "12/12/2002",
      type: "order",
      user: "Nguy???n Ho??ng B???o H??ng",
      post: "Kh??m ph?? Nha Trang 3 ng??y 2 ????m",
    },
    {
      id: 13637,
      time: "12:00:00",
      date: "12/12/2002",
      type: "post",
      user: "Nguy???n Ho??ng B???o H??ng",
      post: "Kh??m ph?? Nha Trang 3 ng??y 2 ????m",
    },
  ]);
  const [reports, setReports] = useState([
    {id: 7282, color: 'green', status: "???? x??? l??", sender: 'Nguy???n Xu??n M???nh', post: "Kh??m ph?? Nha Trang 3 ng??y 2 ????m", content: "Tour ???? h???t h???n", handler: 'Ho??ng Nh???t H??'},
    {id: 7283, color: 'yellow', status: "??ang x??? l??", sender: 'Nguy???n Tu???n Anh', post: "C???m tr???i 2 ng??y 1 ????m H??? Ti??n - La Ng??u", content: "Tour ???? h???t ch???", handler: 'Ho??ng Nh???t H??'},
    {id: 7284, color: 'red', status: "Ch??a x??? l??", sender: 'V?? Minh ?????c', post: "Kh??m ph?? Nha Trang 3 ng??y 2 ????m", content: "Tour ???? h???t h???n", handler: ''},
    {id: 7282, color: 'green', status: "???? x??? l??", sender: 'Nguy???n Xu??n M???nh', post: "Kh??m ph?? Nha Trang 3 ng??y 2 ????m", content: "Tour ???? h???t h???n", handler: 'Ho??ng Nh???t H??'},
    {id: 7283, color: 'yellow', status: "??ang x??? l??", sender: 'Nguy???n Tu???n Anh', post: "C???m tr???i 2 ng??y 1 ????m H??? Ti??n - La Ng??u", content: "Tour ???? h???t th???i h???n ????ng k??", handler: 'Ho??ng Nh???t H??'},
    {id: 7284, color: 'red', status: "Ch??a x??? l??", sender: 'V?? Minh ?????c', post: "Kh??m ph?? Nha Trang 3 ng??y 2 ????m", content: "T??i kh??ng th??? ????ng k?? ???????c tour cho gia ????nh t??i.", handler: ''},
  ]);
  return (
    <div className={styles.container}>
      <div className={styles.widgetContainer}>
        <div className={styles.widget}>
          <img className={styles.icons} src={Post} alt="post"/>
          <div style={{textAlign: "center", marginLeft: "10px"}}>
            <h2 style={{textAlign: "center", color: "#00B4D8"}}>50</h2>
            <h4 >B??i vi???t m???i</h4>
          </div>
        </div>
        <div className={styles.widget}>
          <img className={styles.icons} src={Business} alt="business"/>
          <div style={{textAlign: "center", marginLeft: "10px"}}>
            <h2 style={{textAlign: "center", color: "#00B4D8"}}>132</h2>
            <h4 >Doanh nghi???p</h4>
          </div>
        </div>
        <div className={styles.widget}>
          <img className={styles.icons} src={User} alt="user"/>
          <div style={{textAlign: "center", marginLeft: "10px"}}>
            <h2 style={{textAlign: "center", color: "#00B4D8"}}>3103</h2>
            <h4 >Th??nh vi??n</h4>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.box}>
          <Chart options={options} series={series} type="line" height="100%" width="100%" />
        </div>
        <div className={styles.boxes}>
          <div className={styles.contentBox} style={{ height: "60%" }}>
            <h3 style={{textAlign: "center", color: "#00B4D8"}}>Ho???t ?????ng h??m nay </h3>
            {activities.map((activity) => (
              <p>{activity.user} <b style={{ color: "#00B4D8" }}>{activity.type}</b> on <i>{activity.post}</i></p>
            ))}
          </div>
          <div className={styles.contentBox} style={{ height: "40%" }}>
            <h3 style={{textAlign: "center", color: "#00B4D8"}} >B??o c??o h??m nay</h3>
            <div className={styles.report}>
              <p style={{marginBottom: "10px"}}><div className={styles.circleBackground} style={{ backgroundColor: 'red' }}>59</div> ph???n h???i ch??a x??? l??</p>
              <p style={{marginBottom: "10px"}}><div className={styles.circleBackground} style={{ backgroundColor: '#2984FF' }}>17</div> ???? x??? l?? xong</p>
              <p style={{marginBottom: "10px"}}><div className={styles.circleBackground} style={{ backgroundColor: 'grey' }}>3</div> ??ang x??? l??</p>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default MainPage;