//js para Equipo

import "./Equipo.css"
import "../Colaborador"
import Colaborador from "../Colaborador";
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {
    //Destructuracion
    //le agrega lo que esté en los { } al final de props.datos
    //es decir: "const {v} = props.datos" es lo mismo que v = props.datos.v (pero con {} se pueden hacer varias a la vez)

    const {titulo, colorPrimario, colorSecundario, id} = props.datos;
    const estiloTitulo = { borderColor: colorPrimario };
    const {colaboradores, eliminarColaborador, actualizarColorEquipo, like} = props;

    const obj = {

        backgroundColor: hexToRgba(colorPrimario, 0.6) 

    }

    return<>
        {colaboradores.length > 0 &&
        <section className="equipo" style={obj}>

                    <input 
                    className="input-color"
                    type="color"
                    value={colorPrimario}
                    onChange={(evento) => {
                        actualizarColorEquipo(evento.target.value, id);
                    }}
                    />

                    <h3 style={estiloTitulo}> {titulo}</h3> 

                    <div className="colaboradores">
                        {
                            colaboradores.map((colaborador, index) => <Colaborador 
                            key={index} 
                            datos={colaborador} 
                            colorPrimario={colorPrimario}
                            eliminarColaborador={eliminarColaborador}
                            like={like}
                            />)
                        }
                    </div>
                </section>
        }</>
}

export default Equipo
//exportado a App.js