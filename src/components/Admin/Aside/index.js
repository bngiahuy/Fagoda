import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';
import Avatar from '../../../assets/Header/user.png';

const useStyles = makeStyles(() => ({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  infoContainer: {
    display: "flex",
    flexDirection: "row",
    height: "100px",
    backgroundColor: "#90E0EF",
  },
  avatar:{
    width: "50px",
    height: "50px",
    margin: "auto",
  },
  name: {
    padding: "20px 0",
  },
  editButton: {
    margin: "auto",
    width: "45px",
    height: "20px",
  },
  navButtonContainer: {
    display: "flex",
    flexDirection: "column",
    rowGap: "10px",
    width: "90%",
    alignItems: "center",
    textAlign: "center",
    margin: "20px auto",
  },
  button: {
    width: "100%",
    height: "50px",
    color: "#03045E",
  },
  activeButton: {
    width: "100%",
    height: "50px",
    color: "#03045E",
    backgroundColor: "#90E0EF"
  },
}));

const Aside = () => {
  const styles = useStyles();
  const [active, setActive] = useState('home');

  return (
    <div className={styles.container}>
      {/* Info */}
      <div className={styles.infoContainer}>
        <img className={styles.avatar} src={Avatar} alt='avatar' />
        <div style={{margin: "0 auto"}}>
          <h3 className={styles.name}>ADMIN</h3>
          <Button variant='contained' color='primary' className={styles.editButton}>Sửa</Button>
        </div>
      </div>
      {/* Navigation Button */}
      <div className={styles.navButtonContainer}>
        <Button className={styles.button}>
          Trang chủ
        </Button>
        <Button className={styles.button}
          onClick={() => setActive('home')}
        >
          Thành viên
        </Button>
        <Button className={styles.button}>Bài viết</Button>
        <Button className={styles.button}>Khảo sát</Button>
        <Button className={styles.button}>Phân tích</Button>
        <Button className={styles.button}>Sự kiện</Button>
      </div>
    </div>
  );
};

export default Aside;