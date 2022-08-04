import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Topbar from "./components/topbar/Topbar";
import AdminPage from './pages/admin/admin';
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

function App() {
  const currentUser = true;
  const admin = true;
  return (
    <>
      
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/posts" element={<Homepage />} />
        <Route path="/post/:id" element={<Single />} />
        <Route path="/admin" element={admin ? <AdminPage /> : <Login />} />
        <Route path="/login" element={currentUser ? <Homepage /> : <Login />} />
        <Route path="/register" element={currentUser ? <Homepage /> : <Register />} />
        <Route path="/write" element={currentUser ? <Write /> : <Login />} />
        <Route path="/settings" element={currentUser ? <Settings /> : <Login />} />
      </Routes>
    </>
    
  );
}

export default App;
