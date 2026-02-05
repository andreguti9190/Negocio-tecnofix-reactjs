import { Link } from "react-router-dom";

function Navbarphone({ active, useActive }) {
    const closeNav = ()=>useActive(false)
    return (
        <>
            <div className="navbar-phone" style={{ transform: active ? 'translateY(0)' : 'translateY(-100vh)' }}>
                <i className="fa-solid fa-x" onClick={closeNav}></i>
                <Link to='/' onClick={closeNav}>Inicio</Link>
                <Link to='/contacto' onClick={closeNav}>Contacto</Link>
                <Link to='/servicios' onClick={closeNav}>Servicios</Link>
            </div>
        </>
    )
}

export default Navbarphone;