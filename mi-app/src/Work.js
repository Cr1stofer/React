import React from 'react';

import {datos} from './datos.json'

import $ from 'jquery';

import './App.css';

class Work extends React.Component {
  //creo mi constructor
  constructor(){
  	super();
  	this.state = {
  		datos
  	}
  	
  }

  //mi primer alert con react
  Mialerta() {
    alert("Holaaaa soy tu primer alert con react!!");
  }

  render() {
  	const datos = this.state.datos.map((datos, i) => {
  		return(
  			    <div>
                  <div className="card-body">
	                  <h2 className="card-name"> 
	                      {datos.Nombre}
	                  </h2>
	                  <p className="card-text">
		                  {datos.Pais}
		              </p>   
		               <p className="card-text">
		                  {datos.Codigo}
		                </p>
		               <p className="card-text">
		                  {datos.Descripcion}
		               </p>
		               <buttom type="button" className="btn btn-outline-primary" onClick={this.Mialerta}>mas info</buttom>
		            </div>  
		        </div>     
  			)
  	})

  	return(
		         <div className="box">
		             {datos}
		         </div>
  		)
    
  }
}

export default Work;