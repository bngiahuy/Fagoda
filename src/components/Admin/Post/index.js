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

const Post = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>BÀI VIẾT</h3>
      </div>
      <div className={styles.content}>  

      </div>
    </div>
  );
};

export default Post;