import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';  
import {   
  Routes,
  Route,
  Link 
} from "react-router-dom";
import { Register } from "./pages/security/Register";
import { Home } from "./pages/Home";
import { Login } from "./pages/security/Login";

function App() {

  return (
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/register" element={ <Register />} />
          <Route path="/login" element={ <Login />} />
        </Routes>
  );

}

export default App;
