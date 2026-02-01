
function Navbarphone({active,useActive}) {
    function closeClick() {
        if(active){
            useActive(false);
        }else{
            useActive(true);
        }
    }
    return (
        <>
            <div className="navbar-phone" style={{ transform:active?'translateY(0)':'translateY(-100vh)'}}>
                <i className="fa-solid fa-x" onClick={closeClick}></i>
                <a href="#" className="navbar-phone-a">Objetivos</a>
                <a href="#" className="navbar-phone-a">Sobre nosotros</a>
                <a href="#" className="navbar-phone-a">Contactanos</a>
            </div>
        </>
    )
}

export default Navbarphone;