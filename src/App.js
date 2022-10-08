import React from "react";
// import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      {/* <Routes>
        <Route path="/" element={<Navigate to="/Home" replace />} />
        <Route path="/Home" element={<Home />}/>
      </Routes> */}
      <Home />
    </div>
  )
}

export default App;