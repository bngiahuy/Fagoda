import React from "react";
import { makeStyles } from "@mui/styles";
import { Button, TextField } from "@mui/material";
import Background from "assets/SignIn/SignIn.png";
import Logo from "assets/Header/logo.png";

const useStyles = makeStyles(() => ({
    container: {
        height: '100vh',
        width: '100vw',
        display: "grid",
        gridTemplateColumns: "50% 49% 1%",
        gridGap: "1rem",
        overflow: "hidden",
    },
    image: {
        position: "relative",
        height: "100%",
        width: "100%",

    },
    logo: {
        height: "100px",
        top: "150px",
    },
    signInBox: {
        padding: "1rem",
    },
    signInTitle: {
        paddingLeft: "1rem",
        padding: "2rem",
        fontSize: "30px",
        fontWeight: "800",
        alignItems: "center",
    },
    signUpPage: {
        display: "flex",
    },
    question: {
        padding: "1rem",
        fontSize: "14px",
        fontWeight: "500",
        alignItems: "center",
    },
    signUpText: {
        padding: "1rem",
        color: "#144EC7",
        fontSize: "14px",
        fontWeight: "500",
        alignItems: "center",
    },
    usernameText: {
        padding: "1rem",
        fontSize: "14px",
        fontWeight: "600",
        alignItems: "center",
    },
    passwordText: {
        padding: "1rem",
        fontSize: "14px",
        fontWeight: "600",
        alignItems: "center",
    },
    rememberMeBox: {
        display: "flex",
        gap: "10px",
    },
    rememberMeContainer: {
        display: "grid",
        gridTemplateColumns: "80% 20%",
        padding: "2rem",
    },
    rememberMeText: {
        fontSize: "14px",
        fontWeight: "400",
        alignItems: "center",
    },
    forgetPassword: {
        fontSize: "14px",
        fontWeight: "500",
        alignItems: "center",
        color: "#144EC7"
    },
    submitBox: {
        textTransform: "none",
    }
}));

export const SignIn = () => {
    const styles = useStyles();
    const url = Image;

    return (

        <div className={styles.container}>
            <img src={Background} className={styles.image} alt="" />
            <div className={styles.signInBox}>
                <img src={Logo} className={styles.logo} />
                <div className={styles.signInTitle}>Đăng nhập</div>
                <div className={styles.signUpPage}>
                    <div className={styles.question}>Chưa có tài khoản?</div>
                    <div className={styles.signUpText}>Đăng ký tại đây</div>
                </div>
                <div className={styles.usernameText}>Tài khoản</div>
                <TextField fullWidth label="Email hoặc Số điện thoại" id="Email hoặc Số điện thoại" />
                <div className={styles.passwordText}>Mật khẩu</div>
                <TextField fullWidth label="Mật khẩu" id="Mật khẩu" />
                <div className={styles.rememberMeContainer}>
                    <div className={styles.rememberMeBox}>
                        <input type="checkbox" id="rememberMe"></input>
                        <label for="rememberMe" className={styles.rememberMeText}>Nhớ tài khoản</label>
                    </div>
                    <div className={styles.forgetPassword}>Quên mật khẩu</div>
                </div>
                <Button fullWidth variant="contained" style={{
                    padding: "1rem",
                    backgroundColor: "#2984FF",
                    textTransform: "none",
                }}>Đăng nhập</Button>
            </div>
        </div>
    );
};
