import React from 'react';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Admin from "./pages/Admin";

// use default theme
// const theme = createTheme();

// Or Create your Own theme:
const theme = createTheme({
  palette: {
    primary: {
      main: '#03045E'
    },
    secondary: {
      main: '#00B4D8'
    }
  }
});
    
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<Admin />} />
        </Routes>  
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;