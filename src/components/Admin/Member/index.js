import React from 'react';
import { makeStyles } from '@mui/styles';

import Pagination from '@mui/material/Pagination';
//icons
import { IconButton } from '@mui/material';
import ShowIcon from '../../../assets/Admin/show.png';
import EditIcon from '../../../assets/Admin/edit-text.png';
import DeleteIcon from '../../../assets/Admin/trash.png';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
    height: "500px",
    width: "950px",
    marginLeft: "20px",
    padding: "10px",
    border: '1px solid #00B4D8',
    borderRadius: "20px",
  },
  pagination: {
    position: "absolute",
    bottom: "10px",
    left: "45%"
  },
  actionButtonContainer: {
    padding: "8px 0 0 2px",    
    height: "100%",
    margin: "0",
  },
  actionButton: {
    width: "20x",
    height: "20px",
  },
}));
const createData = (name, role, latestAccessTime) => {
  return {name, role, latestAccessTime}
};
const Member = () => {
  const styles = useStyles();
  const rows = [
    createData("Nguyễn Nhật Anh", "Admin", "1 giây trước"),
    createData("Nguyễn Hoàng Bảo Hùng", "Agency", "1 ngày trước"),
    createData("Nguyễn Xuân Mạnh", "User", "1 tháng trước"),
    createData("Bùi Nguyễn Gia Huy", "User", "1 tháng trước"),
    createData("Hoàng Nhật Hà", "User", "1 năm trước"),
    createData("Công Ty Trách Nhiệm Vô Hạn Một Mình Tao", "User", "1 năm trước"),
    createData("Công Ty Trách Nhiệm Vô Hạn Một Mình Tao", "User", "1 năm trước"),
  ]

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>THÀNH VIÊN</h3>
      </div>
      <div className={styles.content}>  
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead sx={{backgroundColor: "#90E0EF"}}>
              <TableRow>
                <TableCell style={{width:"50%"}}>Tên</TableCell>
                <TableCell align="left">Quyền</TableCell>
                <TableCell align="left">Truy cập gần nhất</TableCell>
                <TableCell align="left" style={{width: "120px"}}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow sx={{width:"50%"}} key={row.name}>
                  {/* <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell> */}
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">{row.role}</TableCell>
                  <TableCell align="left">{row.latestAccessTime}</TableCell>
                  <div className={styles.actionButtonContainer}>
                      <IconButton>
                        <img className={styles.actionButton} src={ShowIcon} alt='ShowIcon' />
                      </IconButton>
                      <IconButton>
                        <img className={styles.actionButton} src={DeleteIcon} alt='DeleteIcon' />
                      </IconButton>
                      <IconButton>
                        <img className={styles.actionButton} src={EditIcon} alt='EditIcon' />
                      </IconButton>
                    </div>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className={styles.pagination}>
          <Pagination 
            count={10}
            color='tertiary'
          />
        </div>
      </div>
    </div>
  );
};

export default Member;