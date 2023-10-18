import "./texto.css" //importamos nuestro texto.css

const Texto = (props)=>{
    const placeHolderModificado = `${props.placeHolder}...` //es una propiedad placeholder
    return <div className="texto">
        <label> {props.Titulo} </label>
        <input placeHolder={placeHolderModificado}></input>
    </div>
}

export default Texto