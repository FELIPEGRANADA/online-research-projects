/*
   Autor  : Julián Guillermo Zapata Rugeles

   El objetivo de este componente es renderizar un pequeño saludo para el usuario que ingresa
   a la plataforma 
   


*/

import React from "react";
import { useState } from "react";
import "./Bienvenida.css";
import img_bienvenida from "../../Multimedia/bienvenida.png"



function Bienvenida () {

    return(
        <div className="bienvenida-div">
           <h3> HOLA </h3>

           <div className="bienvenida-logo">
               <img src={img_bienvenida} alt="logo bienvenida"  className="img-bienvenida"/>
           </div>

           <div className="bienvenida-mensaje">
               <p> Hola! Te damos la bienvenida a la plataforma de gestión de proyectos <br/>
               Tu rol es <strong> [ ROL DEL USUARIO ]</strong> </p>
           </div>


        </div>
    )
    
};

export default Bienvenida;