import React from 'react'
import { Link } from 'react-router-dom';

const AdminPage = () => {
    return (
        <>
            <div className="main-div" style={{ padding: '100px' }}>
                <h1>ADMIN PANEL</h1>
                <br />
                <li> <Link to="/"> Home </Link></li>
                <br />
                <li> <Link to="/posts"> All Posts </Link></li>
                <br />
                <li> <Link to="/login"> Login </Link></li>
                <br />
                <li> <Link to="/register"> Register </Link></li>
                <br />
                <li> <Link to="/profile"> Profile </Link></li>
                <br />
                <li> <Link to="/post/:id"> Single Post </Link></li>
                <br />
                <li> <Link to="/admin"> Write Blog </Link></li>
                <br />
                <li> <Link to="/admin"> Edit Blog </Link></li>
                <br />
                <li> <Link to="/admin"> Edit Profile </Link></li>
            </div>
        </>
    );
}

export default AdminPage