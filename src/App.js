import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";

import Profile from "./components/Profile";
import { Header } from "./components/Header";

import CancelledOrder from "./pages/CancelledOrder";
import { height } from "@mui/system";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div
          style={{
            position: "fixed",
            top: "50px",
            // background: "#F0F2F5",
            // width: "100%",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />}></Route>
            <Route path="/admin" element={<Admin />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cancelled_order" element={<CancelledOrder />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
