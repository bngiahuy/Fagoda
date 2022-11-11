import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';

import Header from '../../components/Admin/Header';
import Aside from '../../components/Admin/Aside';

import MainPage from '../../components/Admin/MainPage';
import Member from '../../components/Admin/Member';
import Post from '../../components/Admin/Post';
import Survey from '../../components/Admin/Survey';
import Analysis from '../../components/Admin/Analysis';
import Event from '../../components/Admin/Event';

const useStyles = makeStyles(() => ({
  container: {
    display: 'grid',
    gridTemplateColumns: '200px 1fr',
  },
}));

const Admin = () => {
  const styles = useStyles();
  const [page, setPage] = useState("MainPage");
  return (
    <>
      {/* <Header/> */}
      <div className={styles.container}>
        <Aside />
        {/* <MainPage/> */}
        {/* <Analysis /> */}
        {/* <Member/> */}
        <Post />

        {/* {page === 'MainPage' && <MainPage />}
        {page === 'Member'   && <Member />}
        {page === 'Post'     && <Post />}
        {page === 'Survey'   && <Survey />}
        {page === 'Analysis' && <Analysis />}
        {page === 'Event'    && <Event />} */}
      </div>
    </>
  );
}

export default Admin;