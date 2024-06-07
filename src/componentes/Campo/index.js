//index.js para CampoTexto

import { useState } from "react"
import "./Campo.css"

const Campo = (props) => {

    //Destructuracion
    //cuando el la propiedad (en este caso type) está "undefined" se le puede dar un valor por defecto a través de la destructuración solo poniendo = "...."
    const { type = "text" } = props;

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
        placeholder={props.placeholder} 
        required={props.required} 
        value={props.valor}
        onChange={manejarCambio}
        type={type}/> 
    </div>
}

export default Campo