import Nav from "./template/Nav";
import Footer from "./template/Footer"

function template({ children }) {

    return (<>
        <Nav />
         {children}
        <Footer />
    </>)
}

export default template;