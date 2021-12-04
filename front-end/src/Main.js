import React from "react";
import Login from "./componentes/Login/Login";
import Navegacion from "./componentes/Navegacion/Navegacion";
import Perfil from "./componentes/Perfil/Perfil";
import Proyectos from "./componentes/Proyectos/Proyectos";
import Registro from "./componentes/Registro/Registro";
import Usuarios from "./componentes/Usuarios/Usuarios";
import Bienvenida from "./componentes/Bienvenida/Bienvenida";


function Main() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" />
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
      <hr/>
      <Bienvenida/>
    </div>
  );
}

export default Main;
