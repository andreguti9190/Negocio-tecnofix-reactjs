import Navbar from "./Navbar.jsx";
import NavbarPhone from "./NavbarPhone.jsx";
import "../style/Nav.css"
import { useState } from "react";


function Nav() {
    const [menuNav, useMenuNav] = useState(false);
    function navbarClick() {
        if (menuNav) {
            useMenuNav(false);
        } else {
            useMenuNav(true);
        }
    }
    return (
        <>
            <nav className="nav">
                <div className="nav-items">
                    <img src="/logo.png" alt="TecnoFix" />
                </div>
                <div className="nav-items">
                    <Navbar />
                    <i onClick={navbarClick} className="fa-solid fa-bars"></i>
                    <NavbarPhone active={menuNav} useActive={useMenuNav} />
                </div>
            </nav>
        </>
    )
}

export default Nav;