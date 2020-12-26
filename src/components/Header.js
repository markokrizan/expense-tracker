import React from 'react'
import { Link } from "react-router-dom";
import gear from '../assets/gear.svg'

const Header = ({ title }) => {
  return (
    <div className="nav-bar">
      <Link to="/" className="home-link">
        <h2>{ title }</h2>
      </Link>
      <Link to="/settings">
        <img className="settings-icon" src={gear} alt="settings"/>
      </Link>
    </div>
  )
}

export default Header;
