import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Profile from "./components/Profile";
import CancelledOrder from "./pages/CancelledOrder";
import { Header } from "./components/Header";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";
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
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>

          <Routes>
            <Route path="/signin" element={<SignIn />} />


            
            <Route path="/signup" element={<SignUp />} />
          </Routes>
          <Header />
          <div style={{ position: "fixed", top: "50px" }}>
            <Routes>
              <Route path="/" element={<Navigate to="/home" replace />}></Route>
              <Route path="/admin" element={<Admin />} />
              <Route path="/home" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/cancelled_order" element={<CancelledOrder />} />

            </Routes>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
