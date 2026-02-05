import Navbar from "./Navbar.jsx";
import NavbarPhone from "./NavbarPhone.jsx";
import { useState } from "react";
import './Nav.css'


function Nav() {
    const [menuNav, useMenuNav] = useState(false);
    
    return (
        <>
            <nav className="nav">
                <div className="nav-items">
                    <img src="/logo.png" alt="TecnoFix" />
                </div>
                <div className="nav-items">
                    <Navbar />
                    <i onClick={()=> useMenuNav(true)} className="fa-solid fa-bars"></i>
                    <NavbarPhone active={menuNav} useActive={useMenuNav} />
                </div>
            </nav>
        </>
    )
}

export default Nav;