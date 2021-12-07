/*
   Author: Luis Felipe Granada Ramírez
   
   Description: List component to show the project progress
*/

import React from "react";
import { useQuery } from '@apollo/client'
import { useState, useEffect } from "react";
import "./Avances.css";
import Proyectos from "../Proyectos/Proyectos";
import GET_PROGRESS_BY_PROJECT from "../../DAO/progressQueries/getProgressbyProject";

// Definition of the component
const Avances = ({projectid}) => {

    // Change of status 
    const [selectedComponent, setSelectedComponent] = useState(1);

    // Progress Queries: Get all progres by project
    const { loading, data, error } = useQuery(GET_PROGRESS_BY_PROJECT, {
        variables : {projectid:projectid}
    });

    // Show Project List
    const showListProjects = () => {
        setSelectedComponent(2);    
    }

    // Get the component to Render
    const getComponent = () => {
        let component;
        if(selectedComponent === 1){
            component = <div className="progress-box">
                            <div>
                                <h1>Avances</h1>
                                <button className="button-new">Nuevo +</button>
                                <button className="button-new" onClick={() => showListProjects()}>Regresar</button>
                            </div>
                            {loading && <p>Cargando información</p>}
                            {error && <p>Se ha presentado un error en la carga de datos</p>}
                            {data && <table className="table-bordered">
                                <thead>
                                    <tr>
                                        <th>Fecha Registro</th>
                                        <th>Descripción</th>
                                        <th>Observaciones</th>
                                        <th>Editar</th>
                                        <th>Eliminar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.progressbyproject.map((progress) => (
                                        <tr key={progress.id}>
                                            <td>{progress.date}</td>
                                            <td>{progress.description}</td>
                                            <td>{progress.observations}</td>
                                            <td><button className="fas fa-edit" onClick={() => this.updateProduct(progress)}></button></td>
                                            <td><button className="fas fa-trash-alt" onClick={() => this.removeProduct(progress)}></button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>}
                        </div>; 
        }
        else if(selectedComponent === 2){
            component = <Proyectos />;
        }
        return component;
    }
      
    // Render the component
    return(
        getComponent()   
    )
    
};

export default Avances;