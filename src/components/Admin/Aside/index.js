import React from 'react';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';

const useStyles = makeStyles(() => ({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  infoContainer: {
    height: "100px",
    backgroundColor: "#90E0EF",
  },
  navButtonContainer: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
    alignItems: "center",
    textAlign: "center",
    margin: "20px auto",
  },
  button: {
    width: "100%",
  }
}));

const Aside = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      {/* Info */}
      <div className={styles.infoContainer}>
        <img className={styles.avatar} alt='avatar' />
        <h3 className={styles.name}>ADMIN</h3>
        <Button variant='contained' color='primary'>Chỉnh sửa</Button>
      </div>
      {/* Navigation Button */}
      <div className={styles.navButtonContainer}>
        <Button className={styles.button}>Trang chủ</Button>
        <Button className={styles.button}>Thành viên</Button>
        <Button className={styles.button}>Bài viết</Button>
        <Button className={styles.button}>Khảo sát</Button>
        <Button className={styles.button}>Phân tích</Button>
        <Button className={styles.button}>Sự kiện</Button>
      </div>
    </div>
  );
};

export default Aside;