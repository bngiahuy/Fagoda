import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';
import Avatar from '../../assets/Header/user.png';

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
  asideContainer:{
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

const Admin = () => {
  const styles = useStyles();
  const [page, setPage] = useState("MainPage");
  return (
    <div className={styles.container}>
      {/* <Header/> */}
      <div className={styles.asideContainer}>
        <div className={styles.infoContainer}>
          <img className={styles.avatar} src={Avatar} alt='avatar' />
          <div style={{margin: "0 auto"}}>
            <h3 className={styles.name}>ADMIN</h3>
            <Button variant='contained' color='primary' className={styles.editButton}>Sửa</Button>
          </div>
        </div>
        {/* Navigation Button */}
        <div className={styles.navButtonContainer}>
          <Button className={styles.button}
            onClick={() => setPage('MainPage')}
            variant={page==='MainPage' ? "contained" : 'nul'}
          >
            Trang chủ
          </Button>
          <Button className={styles.button}
            onClick={() => setPage('Member')}
            variant={page==='Member' ? "contained" : 'nul'}
          >
            Thành viên
          </Button>
          <Button className={styles.button}
            onClick={() => setPage('Post')}
            variant={page==='Post' ? "contained" : 'nul'}
          >
            Bài viết
          </Button>
          <Button className={styles.button}
            onClick={() => setPage('Survey')}
            variant={page==='Survey' ? "contained" : 'nul'}
          >
            Khảo sát
          </Button>
          <Button className={styles.button}
            onClick={() => setPage('Analysis')}
            variant={page==='Analysis' ? "contained" : 'nul'}
          >
            Phân tích
          </Button>
          <Button className={styles.button}
            onClick={() => setPage('Event')}
            variant={page==='Event' ? "contained" : 'nul'}
          >
            Sự kiện
          </Button>
        </div>
        
      </div>
      {page === 'MainPage' && <MainPage />}
      {page === 'Member'   && <Member />}
      {page === 'Post'     && <Post />}
      {page === 'Survey'   && <Survey />}
      {page === 'Analysis' && <Analysis />}
      {page === 'Event'    && <Event />}
    </div>
  );
}

export default Admin;