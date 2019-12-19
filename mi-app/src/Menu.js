import React from 'react';

import Operaciones from './Operaciones'

import Work from './Work'

import Slide from './Slide'

import Galeria from './Galeria'

import Contacto from './Contacto'

import { render } from 'react-dom'

import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './App.css';


export default function Menu() {
  return (
    <Router>
      <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <ul className="navbar-nav mr-auto">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Galery">Galery</Link>
            </li>
            <li>
              <Link to="/Work">People Work</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Galery">
            <Galery />
          </Route>
          <Route path="/Work">
            <Works />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <Slide />
    </div>
  );
}

function Galery() {
  return (
    <div>
      <h2 className="red display-3">Galerias</h2>
      <Galeria />
    </div>
  );
}

function Works(){
  return(
    <div>
       <h2 className="blue display-3">Hello Works people</h2>
       <Work />
    </div>
  );
}


function Contact() {
  return (
    <div>
      <h2 className="display-3">Contacto</h2>
      <Contacto />
    </div>
  );
}


