import "../css-page/Contact.css"
import links from "../../config/links.json"

function Contacto() {
    console.log(links)
    return (
        <>
            <footer>
                <h3>Contacto</h3>
                <div id="contact">
                    { links.data.map((item)=> <a href={item.link} key={item.id} className="contact-bt">{item.name}</a>) }
                </div>
            </footer>
        </>
    )
}

export default Contacto;