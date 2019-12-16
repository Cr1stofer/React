import React from 'react';

import $ from 'jquery';

import './App.css';

class ContenidoA extends React.Component {

  render(){

    return(
      <div>
        <h1 className="text-center">Helloooo, aqui muestro y oculto contenido</h1>
        <p className="display-5 text-center">Proximamente....</p>
      </div>  
      )

  }
}

export default ContenidoA;