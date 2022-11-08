import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Profile from "./components/Profile/Profile";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />}></Route>
          <Route path="/admin" element={<Admin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;