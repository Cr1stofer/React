import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

//importo todo el contenido de la web
import Menu from './Menu.js'
import Slide from './Slide.js'
import Body from './Body.js'
import Funciones from './Funciones.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        <Menu />
        <Slide />
        <p className="display-4">Pruebas con bootstrap en react</p>
        <Body />
        <Funciones />
      </body>
    </div>
  );
}

export default App;
