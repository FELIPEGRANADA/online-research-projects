/*
   Autor  : Julián Guillermo Zapata Rugeles
   
   El objetivo de este componente es renderizar la vista principal ( Main Faces )
   del proyecto.
   
*/



import React from "react";
import { useState } from "react";
import "./MainFaces.css";
import { Link } from 'react-router-dom';
import Navegacion from "../Navegacion/Navegacion";


function MainFaces() {

    return(
        <div className="mainFaces-div">
            <Navegacion/>
        </div>
    )
    
};

export default MainFaces;