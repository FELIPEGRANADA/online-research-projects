import React from "react";
import Login from "./componentes/Login/Login";
import Registro from "./componentes/Registro/Registro";
import MainFaces from "./componentes/MainFaces/MainFaces";
import { BrowserRouter,  Route , Routes } from 'react-router-dom';



function Main() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" />
      
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={ <Login/> }/>
          <Route exact path='/mainFaces' element={ < MainFaces /> }/>
          <Route exact path='/registro' element={ <Registro/> }/>
        </Routes>
      </BrowserRouter>




    </div>
  );
}

export default Main;
