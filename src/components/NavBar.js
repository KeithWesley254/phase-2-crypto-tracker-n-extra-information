import React, { useState } from "react";

function NavBar(){

    const [active, setActive] = useState("navMenu")
    
    const navChange =()=>{
        active === "navMenu" 
        ? setActive ('navMenu navActive') 
        : setActive("navMenu");
    }
    return(
        <nav className="nav">
            <ul className={active}>
                <li className="navList"><a href="/" className="navLinks">Home</a></li>
                <li className="navList"><a href="/cryptotracker" className="navLinks">Crypto Tracker</a></li>
                <li className="navList"><a href="/feedback" className="navLinks">FeedBack</a></li>
            </ul>
            <div onClick={navChange} className="switchNavs">
                <div className="first1"></div>
                <div className="second2"></div>
                <div className="third3"></div>
            </div>
        </nav>
    )
}

export default NavBar;