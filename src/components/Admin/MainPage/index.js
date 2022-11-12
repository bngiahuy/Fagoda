import React from 'react';
import { makeStyles } from '@mui/styles';
import Analysis from '../Analysis';

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
    width: "950px",
  },

}));

const MainPage = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <div 
        className={styles.analysis} 
        // style={{transform:"scale(0.5)"}}
      >
        <Analysis />
      </div>
      {/* </div> */}
    </div>
  );
};

export default MainPage;