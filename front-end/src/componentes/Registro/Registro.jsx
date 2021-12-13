import React from "react";
import { useState } from "react";
import "./Registro.css";
import img_registro from "../../Multimedia/logo.png";
import { Link } from "react-router-dom"


function  Registro() {



    return(
        <div className="registro-div">
           <fieldset className="formulario-registro">
               <form action="">
                <div className="formulario-img">
                    <img className="img-logo" src={img_registro} alt="logo" />
                </div>
                <div className="formulario-inputs">
                    <h4>Formulario Registro</h4>
                    <input type="text" placeholder="Nombre"/> 
                    <input type="text" placeholder="Correo"/>
                    <input type="text" placeholder="Identificacion"/>
                    <input type="password" placeholder="Contraseña"/>
                </div>

                <div className="formulario-botones">
                    <button className="btn-registrar"> REGISTRAR </button>
                    <Link to="/"> <button className="btn-cancelar" > CANCELAR </button> </Link>             
                </div>
               </form>
           </fieldset>
        </div>
    )
    
};

export default Registro;