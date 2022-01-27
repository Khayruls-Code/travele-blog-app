import { Button } from '@mui/material';
import React, { useState } from 'react';
import { VscThreeBars } from 'react-icons/vsc'
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import './Navbar.css'

const Navbar = () => {
  const [isShow, setIsShow] = useState(false)
  const { user, singOutUser } = useAuth()
  return (
    <div className='navbar'>
      <div className="container">
        <div className="navigation">
          <div className="logo">
            <h1>Travele</h1>
          </div>
          <ul className={isShow ? "show" : "hide"}>
            <li><NavLink to="/home">Home</NavLink></li>
            <li><HashLink to="/home#blogs">Blogs</HashLink></li>
            <li><HashLink to="/home#about">About</HashLink></li>
            <li><HashLink to="/home#review">Review</HashLink></li>
            {user.email && <li><NavLink to="/dashboard">Dashboard</NavLink></li>}
            {
              user.email ? <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                <Button variant='outlined' onClick={singOutUser}>Log Out</Button>
                <p className='userName'>{user.displayName?.split(' ')[0]}</p>
              </div> : <li><NavLink to="/login">
                <Button variant='outlined'>Login</Button>
              </NavLink></li>
            }
          </ul>
          <div onClick={() => setIsShow(!isShow)} className="barIcon">
            <VscThreeBars />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;