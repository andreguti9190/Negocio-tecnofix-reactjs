import { Routes , Route } from "react-router-dom"
import Inicio from "./Routes/Inicio/inicio";
import Contacto from "./Routes/contacto/contacto";
import Servicios from "./Routes/servicios/servicios";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Inicio/>}></Route>
      <Route path="/servicios" element={<Servicios/>}></Route>
      <Route path="/contacto" element={<Contacto/>}></Route>
    </Routes>
    </>
  )
}

export default App
