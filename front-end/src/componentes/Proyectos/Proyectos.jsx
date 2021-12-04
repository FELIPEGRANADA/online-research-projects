/*
   Author: Luis Felipe Granada Ramírez
   
   Description: List componente to show the projects
*/

import React from "react";
import { useState, useEffect } from "react";
import "./Proyectos.css";

// Definition of the component
const Proyectos = () => {

    // Change of status on data(Projects)
    const [data, setData] = useState([]);

    // Effect => Run before rendering the component
    useEffect(() => {
        const dataAux=[{_id:"564646454545",
        name:"Proyecto Angular",
        generalobj:"Crear Proyecto MERN",
        specificobj:"Usar metodología Scrum",
        budget:580000,
        startdate:"29/11/2021",
        enddate:"31/12/2021",
        leaderid:"6195bc1e78a11d3df22ab90e",
        status:"Activo",
        stage:"Iniciado"}];
        setData(dataAux);
      });
      
    // Render the component
    return(
        <div className="projects-box">
            <div>
                <h1>Proyectos</h1>
                <button className="button-new">Nuevo +</button>
            </div>
            <table className="table-bordered">
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
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((project) => (
                        <tr key={project._id}>
                            <td>{project.name}</td>
                            <td>{project.generalobj}</td>
                            <td>{project.specificobj}</td>
                            <td>{project.budget}</td>
                            <td>{project.startdate}</td>
                            <td>{project.enddate}</td>
                            <td>{project.leaderid}</td>
                            <td>{project.status}</td>
                            <td>{project.stage}</td>
                            <td><button className="fas fa-edit" onClick={() => this.updateProduct(project)}></button></td>
                            <td><button className="fas fa-trash-alt" onClick={() => this.removeProduct(project)}></button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
    
};

export default Proyectos;