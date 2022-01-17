import React from "react";
import {Link} from 'react-router-dom';
const Navbar=()=>{
    return(
    <nav className="navbar bg-primary">
        <h1>
            <i className="fa fa-github"></i>
            Github Finder
        </h1>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
        </ul>
    </nav>
    )
}

export default Navbar;