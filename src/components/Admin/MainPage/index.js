import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({

}));

const MainPage = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <p>Something here</p>
    </div>
  );
};

export default MainPage;