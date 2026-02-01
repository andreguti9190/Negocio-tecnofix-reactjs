import "../style/Contact.css"
import links from "../../config/links.json"

function Contacto() {
    return (
        <>
            <footer className="footer">
                <h3>TecnoFix</h3>
                <div className="footer-list">
                    <div className="contact">
                        {links.data.map((item) => <a key={item.id} href={item.link} className="contact-bt">{item.name}</a>)}
                    </div>
                    <img className="contact-logo" src="/logo-titulo.png" alt="" />
                </div>
            </footer>
        </>
    )
}

export default Contacto;