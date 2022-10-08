import React from 'react';
import './Header.css';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <nav className="link-container">
            <NavLink to = '/'>Home</NavLink>
            <NavLink to = '/Orders'>Orders</NavLink>
            <NavLink to = '/Products'>Products</NavLink>
            <NavLink to = '/About'>About</NavLink>
            <NavLink to = '/Contact'>Contact</NavLink>
        </nav>
    );
};

export default Header;