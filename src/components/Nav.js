import React from 'react';
import {Link} from "react-router-dom";

function Nav() {
    return(
        <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/dataPage/Interactive"}>Interactive</Link>
            <Link to={"/dataPage/Test"}>Test</Link>
        </nav>
    )
}

export default Nav;