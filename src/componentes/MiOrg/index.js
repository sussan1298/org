//js para MiOrg (seccion media: h3 Mi Organizacion && icono add.png)

import { useState } from "react";
import "./MiOrg.css"

const MiOrg = (props) => {
    //Estado - Hooks
    //useState()
    //const [nombreVariable, funcionActualiza] = useState(valorInicial)

    // -----1er ejemplo------

    // el useState tiene el valor en true pero la funcion maejarClick llama a la funcion que hace el cambio del State y lo niega (para estarlo cambiando/switcheando entre 'true/false') -> manejarClick se llama en el onClick del icono/png

    // const [mostrar, actualizarMostrar] = useState(true)

    // const manejarClick = () => {
    //     console.log("Mostrar/Ocultar elemento", !mostrar);
    //     actualizarMostrar(!mostrar);
    // }

    //-----------------------

    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg;
