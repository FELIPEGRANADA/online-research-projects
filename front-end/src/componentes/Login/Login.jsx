/*
   Autor  : Julián Guillermo Zapata Rugeles
   
   El objetivo de este componente es renderizar el login principal que usará el usuario 
   para su ingreso a la plataforma de proyectos 
   


*/

import React from "react";
import { useState } from "react";
import "./Login.css";
import img_logo from "../../Multimedia/logo.png";



function Login() {

    return(
        <div className="login-div">
            
            <p> <strong>Este es el componente Login </strong></p>
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
                    <button type="submit" > Ingresar </button>
                    <button type="submit" > Registrarse </button>
                </div>
            </fieldset>
        </div>
    )
    
};

export default Login;