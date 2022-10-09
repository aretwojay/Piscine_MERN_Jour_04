import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Register } from "./pages/security/Register";
import { Login } from "./pages/security/Login";
import { Home } from "./pages/Home";
import { Blog } from "./pages/user/Blog";
import { hasAuthentificated } from "./services/AuthApi";
import Auth from "./context/Auth";
import AuthentificatedRoute from "./components/AuthentificatedRoute";
import { getItem, addItem, removeItem } from './services/LocalStorage';

function App() {

  const [isAuthentificated, setIsAuthentificated] = useState(hasAuthentificated());
  const [user, setUser] = useState(JSON.parse(getItem("user")));

  return (
    <Auth.Provider value={{ isAuthentificated, setIsAuthentificated }} >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {(isAuthentificated) ?
          (<Route path='/' element={<AuthentificatedRoute />}>
            <Route path={"/" + user.login} element={<Blog />} />
          </Route>
          )
          :
          (<Route path={"/login"} element={<Login />} />)
        }
      </Routes>
    </Auth.Provider>
  );

}

export default App;
