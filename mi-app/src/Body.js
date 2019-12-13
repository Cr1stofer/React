import React from 'react';

import {datos} from './datos.json'

import './App.css';

class Body extends React.Component {
  //creo mi constructor
  constructor(){
  	super();
  	this.state = {
  		datos
  	}
  	
  }

  render() {
  	const datos = this.state.datos.map((datos, i) => {
  		return(
            <div className="row">
                <div className="col-lg-6">
                  <div className="card-body">
	                  <h2 className="card-title"> 
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
		            </div>  
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

export default Body;