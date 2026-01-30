import "../style/Nav.css"

function Nav() {
    return (
        <>
            <nav className="nav">
                <div className="nav-items">
                    <img src="/logo.png" alt="TecnoFix" height="80px"/>
                </div>
                <div className="nav-items">
                    <a href="#" className="nav-items-a">Objetivos</a>
                    <a href="#" className="nav-items-a">Sobre Nosotros</a>
                    <a href="#" className="nav-items-a">Contactanos</a>
                </div>
            </nav>
        </>
    )
}

export default Nav;