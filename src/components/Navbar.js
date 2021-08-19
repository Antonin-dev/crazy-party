import React from 'react';
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <Link to ={"/"}>Mes soirées</Link>
            <Link to = {"/organiser"}>J'organise</Link>
        </nav>
    );
}

export default Navbar;
