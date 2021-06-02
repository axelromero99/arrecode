import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import "./Navbar.css";

import { IconContext } from 'react-icons/lib';

import { ReactComponent as Logo } from './images/logowhite.svg';


const Navbar = () => {

    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () =>{
        if(window.innerWidth <=960){
            setButton(false)
        }else{
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    },[]);

    window.addEventListener('resize', showButton);

    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                        <Logo className="logo"/>
                    </Link>

                    {/* this is for mobile */}
                    <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes/> : <FaBars/>}
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Projects" className="nav-links" onClick={closeMobileMenu}>Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/AboutMe" className="nav-links" onClick={closeMobileMenu}>About me</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/ContactMe" className="nav-links" onClick={closeMobileMenu}>Contact me</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
