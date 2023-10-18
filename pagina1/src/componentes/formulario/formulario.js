import "./formulario.css"
import Texto from "../texto/texto.js"

const Fomulario = () =>{
    return <section className="fomulario">
        <fomr>
            <h1>Rellena el formulario para crear un nuevo personaje.</h1>
            <Texto titulo="Nombre" placeholder ="Ingesar nombre"/>
            
        </fomr>
    </section>
}