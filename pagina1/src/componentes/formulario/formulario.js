import "./formulario.css"
import Texto from "../texto/texto.js"
import ListaOpciones from "../ListaOpciones"

const Fomulario = () =>{
    return <section className="formulario">
        <form>
            <h1>Rellena el formulario para crear un nuevo personaje.</h1>
            <Texto titulo="Nombre" placeHolder ="Ingesar nombre"/>
            <Texto titulo="Rango" placeHolder ="Ingesar el rango"/>
            <Texto titulo="Foto" placeHolder ="Ingesar enlace de foto"/>
            <ListaOpciones/>
        </form>
    </section>
}

export default Fomulario