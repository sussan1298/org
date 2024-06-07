import { useState } from 'react';
import { v4 as uuid } from "uuid"; import './App.css';
import Header from "./componentes/Header/Header";
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';


function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, setColaboradores] = useState([{
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav:true  
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav:false
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav:false
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav:false
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav:false
  }]);

  //Lista de Equipos:
  const [equipos, setEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },

    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },

    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },

    {
      id: uuid(),
      titulo: "DevOps",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },

    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },

    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },

    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    }
  ]);

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  //Registrar Colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo Colaborador", colaborador)
    console.log("Lista Colaboradores", colaboradores);

    //Spread operrator
    //Hace una copia del que se pasa con "..." y se añade el sig
    //setValor([....haceCopia, meteDato])
    setColaboradores([...colaboradores, colaborador])

  }

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("eliminar colaborador", id);
    const nuevosColaboradores = colaboradores.filter((colaborador)=> colaborador.id != id);
    setColaboradores(nuevosColaboradores);
     
  }

  //Actualizar Color de Equipo
  //funcion actualizarColorEquipo() se corre en index.js de Equipo y se le pasa el onChange del input de color + el titulo del equipo
  const actualizarColorEquipo = (color, id) => {
    console.log("Actualizar: ", color, id);
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color;
      }

      return equipo

    })

    setEquipos(equiposActualizados);
  }

//Crear Equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    setEquipos([...equipos, { ...nuevoEquipo, id: uuid() }])
  }

  //Funcion para LIKE
  const like = (id) => {
    console.log("like", id);
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador

    })

    setColaboradores (colaboradoresActualizados);

  }

  return (
    <div>
      <Header />

      {/* ----Opcion 1 para mostrar Formulario ------- */}
      {/* Ternario --> condicion ? seMuestra : noSeMuestra; */}
      {/* {mostrarFormulario === true ? <Formulario/> : <></>} */}

      {/* ----Opcion 2 para mostrar Formulario ------- */}
      {/* condicion && seMuestra */}

      {mostrarFormulario && <Formulario
        //lista de equipos (solo titulo) que sale de equipos
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador={registrarColaborador}
        crearEquipo={crearEquipo}
      />

      }

      <MiOrg cambiarMostrar={cambiarMostrar} />


      {
        equipos.map((equipo) => <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColorEquipo={actualizarColorEquipo}
          like={like}
        />
        )
      }

      <Footer />


    </div>
  );
}

export default App;
