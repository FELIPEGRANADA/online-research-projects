/*
   Author: Luis Felipe Granada Ramírez
   
   Description: List componente to show the projects
*/

import React from "react";
import { useState, useEffect } from "react";
import { useQuery } from '@apollo/client'
import "./Proyectos.css";
import Avances from "../Avances/Avances";
import GET_PROJECTS from "../../DAO/projectQueries/getAllProjects";

// Definition of the component
const Proyectos = () => {

    // Change of status 
    const [selectedComponent, setSelectedComponent] = useState(1);
    const [selectedProject, setSelectedProject] = useState("");

    // Effect => Run before rendering the component
    /*useEffect(() => {
    });*/

    // Project Queries: Get all projects
    const { loading, data, error } = useQuery(GET_PROJECTS);

    // Show Progress List
    const showListProgress = (project) => {
        setSelectedProject(project.id);
        setSelectedComponent(2);    
    }
      
    // Get the component to Render
    const getComponent = () =>{
        let component;
        if(selectedComponent === 1){
            component = <div className="projects-box">
                            <div>
                                <h1>Proyectos</h1>
                                <button className="button-new">Nuevo +</button>
                            </div>
                            {loading && <p>Cargando información</p>}
                            {error && <p>Se ha presentado un error en la carga de datos</p>}
                            {data && <table className="table-bordered">
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Objetivos Generales</th>
                                        <th>Objetivos Específicos</th>
                                        <th>Presupuesto</th>
                                        <th>Fecha Inicio</th>
                                        <th>Fecha Fin</th>
                                        <th>Líder</th>
                                        <th>Estado</th>
                                        <th>Etapa</th>
                                        <th>Avances</th>
                                        <th>Editar</th>
                                        <th>Eliminar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.projects.map((project) => (
                                        <tr key={project.id}>
                                            <td>{project.name}</td>
                                            <td>{project.generalobj}</td>
                                            <td>{project.specificobj}</td>
                                            <td>{project.budget}</td>
                                            <td>{project.startdate}</td>
                                            <td>{project.enddate}</td>
                                            <td>{project.leaderid}</td>
                                            <td>{project.status}</td>
                                            <td>{project.stage}</td>
                                            <td><button className="fas fa-eye" onClick={() => showListProgress(project)}></button></td>
                                            <td><button className="fas fa-edit" onClick={() => this.updateProduct(project)}></button></td>
                                            <td><button className="fas fa-trash-alt" onClick={() => showListProgress(project)}></button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>}
                        </div>;
        }
        else if(selectedComponent === 2){
            component = <Avances projectid={selectedProject}/>;
        }
        return component;
    }
    return(
        getComponent()
    )
    
};

export default Proyectos;