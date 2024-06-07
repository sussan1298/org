//js.para boton

import "./Boton.css"

const Boton = (props) => {
    return <button className="boton-crear">{props.children}</button>
}

export default Boton