import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  container: {
  },
  titleContainer: {
    height: "100px",
    padding: "39px 20px",
  },
  title: {
    color: "#03045E",
    fontSize: "1.2em",
  },
  content: {
    marginLeft: "20px",
    border: '1px solid #00B4D8',
    borderRadius: "20px",
    height: "500px",
  },

}));

const MainPage = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>TRANG CHỦ</h3>
      </div>
      <div className={styles.content}>  

      </div>
    </div>
  );
};

export default MainPage;