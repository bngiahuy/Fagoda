import React, { useEffect, useState } from 'react';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Profile from "./components/Profile";
import CancelledOrder from "./pages/CancelledOrder";
import { Header } from "./components/Header";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from 'helpers/firebase/auth';
import { getUserData } from 'helpers/firebase/db';
// use default theme
// const theme = createTheme();

// Or Create your Own theme:
const theme = createTheme({
  palette: {
    primary: {
      main: "#2984FF",
    },
    secondary: {
      main: "#00B4D8",
    },
    tertiary: {
      main: "#90E0EF",
    },
  },
});

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserData(await getUserData(user.uid));
      }
      else {
        setUserData(null);
      }
    })
  }, [])

  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header userData={userData} />
          <div style={{ position: "fixed", top: "50px" }}>
            <Routes>
              <Route path="/" element={<Navigate to="/home" replace />}></Route>
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/home" element={<Home userData={userData} />} />
              <Route path="/profile" element={<Profile userData={userData} />} />
              <Route path="/cancelled_order" element={<CancelledOrder />} />
            </Routes>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
