/*
   Autor  : Julián Guillermo Zapata Rugeles
   
   El objetivo de este componente es renderizar el login principal que usará el usuario 
   para su ingreso a la plataforma de proyectos 
   


*/

import React from "react";
import { useState } from "react";
import "./Login.css";
import img_logo from "../../Multimedia/logo.png";
import { Link } from 'react-router-dom';
import background from "../../Multimedia/login-back.jpeg";



function Login() {

    return(
        <div className="login-div">
            
            <p className="version-app"> SYSGEPRO - versión 1.0 </p>
            <fieldset className="field-container">

                <div className="imagen-logo">
                    <img src={img_logo} alt="Logo" className="logo" />
                </div>

                <div className="entradas-login">
                    <input type="text" placeholder="Usuario" required/>
                    <br/>
                    <input type="password" placeholder="contraseña" required/>

                </div>
                <div className="boton-acciones">
                   {/* Esta linea es temporal para pruebas de ingreso al proyecto */}
                    <Link to="/mainFaces"> <button type="submit" > Ingresar </button></Link>
                    <Link to="/registro"> <button type="submit" > Registrarse </button></Link>
                </div>
            </fieldset>
        </div>
    )
    
};

export default Login;