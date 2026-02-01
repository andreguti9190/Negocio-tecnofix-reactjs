import Navbar from "./Navbar.jsx";
import NavbarPhone from "./NavbarPhone.jsx";
import "../style/Nav.css"

function Nav() {
    return (
        <>
            <nav className="nav">
                <div className="nav-items">
                    <img src="/logo.png" alt="TecnoFix" />
                </div>
                <div className="nav-items">
                    <Navbar />
                    <NavbarPhone />
                </div>
            </nav>
        </>
    )
}

export default Nav;