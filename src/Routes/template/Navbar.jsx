
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className="navbar">
                <Link to='/'>Inicio</Link>
                <Link to='/contacto'>Contacto</Link>
                <Link to='/servicios'>Servicios</Link>
            </div>
        </>
    )
}

export default Navbar;