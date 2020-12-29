import React, {useEffect, useState} from 'react';
import './Nav.css';
import logo from './image/logo.png'

function Nav() {
const [show, handleShow] = useState(false);

useEffect(() => {
    window.addEventListener("scroll", () => {
        if(window.scrollY > 100){
            handleShow(true);
        } else handleShow(false);
    });
    return () => {
        window.removeEventListener("scroll", () => {});
    };
}, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png" alt="Netflix logo"/>
            <img className="nav__avatar" src={logo} alt="Netflix logo"/>
        </div>
    )
}

export default Nav
