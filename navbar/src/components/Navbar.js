import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='nav'>
            <a href='#' className='nav__logo'>
                Navbar
            </a>
            <ul className='nav__menu'>
                <li>
                    <a href='#'>Home</a>
                </li>
                <li>
                    <a href='#'>About</a>
                </li>
                <li>
                    <a href='#'>Skills</a>
                </li>
                <li>
                    <a href='#'>Portfolio</a>
                </li>
                <li>
                    <a href='#'>Contact</a>
                </li>
            </ul>

            <div className='nav__toggler'>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>
        </nav>
    )
}

export default Navbar