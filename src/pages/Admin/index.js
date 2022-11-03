import React from 'react';
import { makeStyles } from '@mui/styles';

import Header from '../../components/Admin/Header';
import Aside from '../../components/Admin/Aside';
import MainPage from '../../components/Admin/MainPage';

const useStyles = makeStyles(() => ({
  container: {
    display: 'grid',
    gridTemplateColumns: '200px 1fr',
  },
}));

const Admin = () => {
  const styles = useStyles();
  return (
    <>
      <Header/>
      <div className={styles.container}>
        <Aside />
        <MainPage />
      </div>
    </>
  );
}

export default Admin;