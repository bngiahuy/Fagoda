import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router-dom";
//icons
import { IconButton } from "@mui/material";
import ShowIcon from "../../../assets/Admin/show.png";
import EditIcon from "../../../assets/Admin/edit-text.png";
import DeleteIcon from "../../../assets/Admin/trash.png";

//table
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const useStyles = makeStyles(() => ({
  container: {},
  titleContainer: {
    height: "100px",
    padding: "39px 20px",
  },
  title: {
    color: "#03045E",
    fontSize: "1.2em",
  },
  content: {
    width: "1200px",
    height: "600px",
    marginLeft: "20px",
    padding: "10px",
    border: "1px solid #00B4D8",
    borderRadius: "20px",
  },
  pagination: {
    position: "absolute",
    bottom: "10px",
    left: "45%",
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
  box: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-40%, -50%)",
    width: "1000px",
    height: "700px",
    background: "linear-gradient(180deg, #90E0EF 0%, #E4E5E6 100%)",
    border: "2px solid #ddd",
    borderRadius: "10px",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Report = () => {
  const styles = useStyles();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [deletePost, setDeletePost] = useState({});
  const [rows, setRows] = useState([
    {id: 7282, color: 'green', status: "???? x??? l??", sender: 'Nguy???n Xu??n M???nh', post: "Kh??m ph?? Nha Trang 3 ng??y 2 ????m", content: "Tour ???? h???t h???n", handler: 'Ho??ng Nh???t H??'},
    {id: 7283, color: 'yellow', status: "??ang x??? l??", sender: 'Nguy???n Tu???n Anh', post: "C???m tr???i 2 ng??y 1 ????m H??? Ti??n - La Ng??u", content: "Tour ???? h???t ch???", handler: 'Ho??ng Nh???t H??'},
    {id: 7284, color: 'red', status: "Ch??a x??? l??", sender: 'V?? Minh ?????c', post: "Kh??m ph?? Nha Trang 3 ng??y 2 ????m", content: "Tour ???? h???t h???n", handler: ''},
    {id: 7282, color: 'green', status: "???? x??? l??", sender: 'Nguy???n Xu??n M???nh', post: "Kh??m ph?? Nha Trang 3 ng??y 2 ????m", content: "Tour ???? h???t h???n", handler: 'Ho??ng Nh???t H??'},
    {id: 7283, color: 'yellow', status: "??ang x??? l??", sender: 'Nguy???n Tu???n Anh', post: "C???m tr???i 2 ng??y 1 ????m H??? Ti??n - La Ng??u", content: "Tour ???? h???t th???i h???n ????ng k??", handler: 'Ho??ng Nh???t H??'},
    {id: 7284, color: 'red', status: "Ch??a x??? l??", sender: 'V?? Minh ?????c', post: "Kh??m ph?? Nha Trang 3 ng??y 2 ????m", content: "T??i kh??ng th??? ????ng k?? ???????c tour cho gia ????nh t??i.", handler: ''},
  ]);
  const handleDelete = (row) => {
    setRows(rows.filter((_row) => _row !== row));
  };
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>
          B??O C??O
        </h3>
      </div>
      <div className={styles.content}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead sx={{ backgroundColor: "#90E0EF" }}>
              <TableRow>
                <TableCell style={{  }}>ID</TableCell>
                <TableCell align="left">Tr???ng th??i</TableCell>
                <TableCell align="left">Ng?????i b??o c??o</TableCell>
                <TableCell align="left" style={{ }}>
                  B??i vi???t
                </TableCell>
                <TableCell align="left" style={{ }}>
                  N???i dung
                </TableCell>
                <TableCell align="left" style={{ }}>
                  Ng?????i x??? l??
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, idx) => (
                <TableRow sx={{ width: "50%" }} key={row.postName}>
                  {/* <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell> */}
                  <TableCell align="left" style={{ width: '5%' }}>#{row.id}</TableCell>
                  <TableCell align="left" style={{ width: '10%' }}>
                    {row.status === '???? x??? l??' && <p style={{backgroundColor: "#2984FF", color: "white", padding: '2px'}}>{row.status}</p>}
                    {row.status === '??ang x??? l??' && <p style={{backgroundColor: "#aaa", color: "white", padding: '2px'}}>{row.status}</p>}
                    {row.status === 'Ch??a x??? l??' && <p style={{backgroundColor: "red", color: "white", padding: '2px'}}>{row.status}</p>}
                  </TableCell>
                  <TableCell align="left" style={{ width: '15%' }}>{row.sender}</TableCell>
                  <TableCell align="left" style={{ width: '20%' }}>
                      {row.post}
                  </TableCell>
                  <TableCell align="left" style={{ width: '25%' }}>{row.content}</TableCell>
                  <TableCell align="left" style={{ width: '15%' }}>
                    {row.handler !== '' && row.handler}
                    {row.handler === '' && <Button 
                      variant="outlined" 
                      color="error" 
                      onClick={() => navigate('/tourdetail')}
                    >
                        X??? l??
                      </Button>
                    }
                  </TableCell>
                  {/* <div className={styles.actionButtonContainer}>
                    <IconButton onClick={() => setOpenModal(true)}>
                      <img
                        className={styles.actionButton}
                        src={ShowIcon}
                        alt="ShowIcon"
                      />
                    </IconButton>
                    <IconButton
                      onClick={() => {
                        setOpenDialog(true);
                        setDeletePost(row);
                      }}
                    >
                      <img
                        className={styles.actionButton}
                        src={DeleteIcon}
                        alt="DeleteIcon"
                      />
                    </IconButton>
                    <IconButton>
                      <img
                        className={styles.actionButton}
                        src={EditIcon}
                        alt="EditIcon"
                      />
                    </IconButton>
                  </div> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className={styles.pagination}>
          <Pagination count={10} color="tertiary" />
        </div>
      </div>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.box}>
          <div style={{ width: "600px" }}>
            {/* <h2 className={styles.title}>[NH???T B???N - ?????A ??I???M ???????C Y??U TH??CH NH???T N??M 2069]</h2> */}
          </div>
        </Box>
      </Modal>
      <Dialog
        open={openDialog}
        keepMounted
        onClose={() => setOpenDialog(false)}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle fontWeight='bold' color='#db4646'>{"C???nh b??o !!!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            B???n c?? ch???c ch???n l?? s??? xo?? b??i vi???t kh??ng?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Hu???</Button>
          <Button
            onClick={() => {
              setOpenDialog(false);
              handleDelete(deletePost);
            }}
          >
            Ch???c ch???n
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Report;
