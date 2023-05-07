import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
    const [active, setActive] = useState("nav__menu");
    const [togglerIcon, setTogglerIcon] = useState("nav__toggler");

    const navToggleActivate = () => {
        active === 'nav__menu' ? setActive('nav__menu nav__active') : setActive('nav__menu')
        togglerIcon === 'nav__toggler' ? setTogglerIcon('nav__toggler toggle') : setTogglerIcon('nav__toggler')
    }

    return (
        <nav className='nav'>
            <a href='#' className='nav__logo'>
                Navbar
            </a>
            <ul className={active}>
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

            <div onClick={navToggleActivate} className={togglerIcon}>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>
        </nav>
    )
}

export default Navbar