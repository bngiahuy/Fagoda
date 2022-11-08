import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";

import Profile from "./components/Profile";
import { Header } from "./components/Header";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div style={{position: "fixed", top: "50px"}}>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />}></Route>
            <Route path="/admin" element={<Admin />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;