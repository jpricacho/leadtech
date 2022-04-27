import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'
import logo from '../images/logo.png'
import {Link as RouterLink} from 'react-router-dom';

const Header = () => {

    const [open, setOpen] = useState(false)

    const showMenu = () => {
        setOpen(!open)
    }

    return (
        <div className='header'>

            <div className="header-logo">
                <img src={logo} alt="logo" />
                <h2>LeadTECH</h2>
            </div>



            <nav>

                <ul className='list-items'>

                    <li><Link to='/'>Home</Link></li>
                    <li><Link component={RouterLink} to='/about'>About</Link></li>
                    <li><Link component={RouterLink} to='/services'>Services</Link></li>
                    <li><Link component={RouterLink} to='/projects'>Projects</Link></li>
                    <li><Link component={RouterLink} to='/contact'>Contact</Link></li>
                    <li><Link component={RouterLink} to="/developers">Developers</Link></li>
                </ul>

            </nav>


        </div>
    );
};

export default Header;