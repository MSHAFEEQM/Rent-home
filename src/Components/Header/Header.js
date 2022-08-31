import React from 'react'
import './header.css';
import { Link } from 'react-router-dom';

function Header() {

  return (
    <div className='header'>
        <div className="logo-space">
            <img src='logo192.png' alt="" />
        </div>
        <div className="navigation">
            <ul className="nav-items">
                <li className="nav-item" id='nav-item'><Link to="/home" className='link-style'>Home</Link></li>
                <li className="nav-item"><Link to="/" className='link-style'>Rent</Link></li>
                <li className="nav-item"><Link to="/buy" className='link-style'>Buy</Link></li>
                <li className="nav-item"><Link to="/sell" className='link-style'>Sell</Link></li>
                <li className="nav-item"><Link to="/manage" className='link-style'>Manage Property</Link></li>
                <li className="nav-item"><Link to="/resource" className='link-style'>Resources</Link></li>
            </ul>
        </div>
        <div className="login-space">
            <button className='login-button'>Login</button>
            <button className='signup-button'>Signup</button>
        </div>
      
    </div>
  )
}

export default Header
