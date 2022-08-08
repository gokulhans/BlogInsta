import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Topbar from "./components/topbar/Topbar";
import AdminPage from './pages/admin/admin';
import Home from "./pages/home/Home";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  const admin = true;
  return (
    <>
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/posts" element={<Home />} />
        <Route path="/post/:id" element={<Single />} />
        <Route path="/admin" element={admin ? <AdminPage /> : <Login />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/write" element={user ? <Write /> : <Login />} />
        <Route path="/settings" element={user ? <Settings /> : <Login />} />
      </Routes>
    </>
    
  );
}

export default App;
