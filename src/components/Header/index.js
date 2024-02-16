import React from 'react'
import {Link} from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
import { IoIosSettings } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import './index.css'

const Header = () => (
    <div className="header-card">
        <h1 className="logo-name" >Bharat News</h1>
        <ul className="list">
            <Link to="/"> <li> <FaHome className='logo'/> </li> </Link>
            <Link to="/profile"> <li><CgProfile className='logo'/> </li></Link>
            <Link to="/settings"> <li><IoIosSettings className='logo'/> </li></Link>
        </ul>
    </div>
)

export default Header