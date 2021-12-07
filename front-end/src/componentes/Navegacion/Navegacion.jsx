/*




*/

import React from "react";
import { useState } from "react";
import "./Navegacion.css";
import { Link } from "react-router-dom";
import Bienvenida from "../Bienvenida/Bienvenida"
import Proyectos from "../Proyectos/Proyectos";
import Usuarios from "../Usuarios/Usuarios"
import Perfil from "../Perfil/Perfil"

function  Navegacion() {
    const [ componente_actual , set_componente_actual ] = useState(Bienvenida);


    const logout = () =>{

        /*
            Esta función contendrá la logica del Logout o termino de session     
            Actualmente solo tiene de muestra salir sin accion alguna 
        
        */

        window.location.href = '/';
    }

    return(
        <div className="navigation-div">


            <nav className="nav-div">
                
                {/*
                
                
                Cambio de componentes internos en la pagina principal
                
                
                
                */}


                <div onClick={() => set_componente_actual(<Bienvenida></Bienvenida>)} className="click-hover">
                    <h4> Inicio </h4>
                </div>
                
                <div onClick={() => set_componente_actual(<Proyectos></Proyectos>)} className="click-hover" >
                    <h4> Proyectos </h4>
                </div>


                <div onClick={() => set_componente_actual(<Usuarios></Usuarios>)} className="click-hover">
                    <h4> Usuarios </h4>
                </div>


                <div onClick={() => set_componente_actual(<Perfil></Perfil>)} className="click-hover">
                    <h4> Perfil </h4>
                </div>


                <div className="click-hover" onClick={() => logout()}>
                    <h4> Salir </h4>
                </div>


            </nav>
            
            <div>
                <p>  Hora Local :  </p>
            </div>


            <div className="componente-renderizado">

                {/*

                    Aquí estara el componente a mostrar en la pagina principal 
                    
                
                */}

                { componente_actual } 
            
            </div> 

        </div>
    )
    
};

export default Navegacion;