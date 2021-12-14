/*
   Autor  : Mileidis Ruiz Morelos
   
   El objetivo de este componente es renderizar el Perfil que usará el usuario 
   para la visualizacion y edicion de sus datos en la plataforma de proyectos 
   
*/

import React from "react";
import { useState } from "react";
import "./Perfil.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import img_user from "../../Multimedia/user-member.jpg";



function  Perfil() {

    return(
        <div className="perfil-div">
            <div class="container rounded bg-white mt-5 shadow">
                <div class="row">
                    <div class="col-md-4 border-right">
                        <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" src={img_user} width="120"/><span class="font-weight-bold">Felipe Diaz</span><span class="text-black-50">pipe_dia12@ggg.com</span><span>Estudiante</span></div>
                    </div>
                    <div class="col-md-8">
                        <div class="p-3 py-5">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <div class="d-flex flex-row align-items-center back"><i class="fas fa-arrow-left mr-1 mb-1"></i>
                                    <h6>Regresar a inicio</h6>
                                </div>
                                <h6 class="text-right">Editar Perfil</h6>
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-6"><input type="text" class="form-control" placeholder="first name" value="Felipe"/></div>
                                <div class="col-md-6"><input type="text" class="form-control" value="Diaz" placeholder="Last name"/></div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-6"><input type="text" class="form-control" placeholder="Email" value="pipe_dia12@ggg.com"/></div>
                                <div class="col-md-6"><input type="text" class="form-control" value="19685969668" placeholder="Id"/></div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-6"><input type="text" class="form-control" placeholder="type" value="Estudiante"/></div>
                                <div class="col-md-6"><input type="text" class="form-control" value="Activo" placeholder="Status"/></div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-6"><input type="text" class="form-control" placeholder="address" value="D-11, Av. 26 block 2, ANT,COL"/></div>
                                <div class="col-md-6"><input type="text" class="form-control" value="043958409584095" placeholder="Password"/></div>
                            </div>
                            <div class="mt-5 text-right"><button class="btn btn-primary profile-button" type="button">Guardar Perfil</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
};

export default Perfil;