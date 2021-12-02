import React from "react";
import { useState } from "react";
import "./Login.css";




function Login() {

    return(
        <div className="login-div">
            <p> <strong>Este es el componente Login </strong></p>
            <fieldset>
                <div className="entradas-login">
                    <input type="text" placeholder="Usuario"/>
                    <br/>
                    <input type="text" placeholder="Usuario"/>

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