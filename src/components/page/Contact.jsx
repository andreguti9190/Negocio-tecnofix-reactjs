import "../style/Contact.css"
import links from "../../config/links.json"

function Contacto() {
    console.log(links)
    return (
        <>
            <footer  className="footer">
                <h3>Contacto</h3>
                <div className="contact">
                    { links.data.map((item)=> <div key={item.id} ><a href={item.link}className="contact-bt">{item.name}</a></div>) }
                </div>
            </footer>
        </>
    )
}

export default Contacto;