import React from "react";
import Login from "./componentes/Login/Login";
import Navegacion from "./componentes/Navegacion/Navegacion";
import Perfil from "./componentes/Perfil/Perfil";
import Proyectos from "./componentes/Proyectos/Proyectos";
import Registro from "./componentes/Registro/Registro";
import Usuarios from "./componentes/Usuarios/Usuarios";


function Main() {
  return (
    <div className="App">
      <p> Aquí se hubicará todo el contenido del front-end </p>
      <hr/>
      <Login/>
      <hr/>
      <Navegacion/>
      <hr/>
      <Perfil/>
      <hr/>
      <Proyectos/>
      <hr/>
      <Registro/>
      <hr/>
      <Usuarios/>
    </div>
  );
}

export default Main;
