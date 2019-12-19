import React from 'react';

import './App.css';

var n1 = 1;
var n2 = 2;

function suma(n1,n2){
	return (n1+n2);
}

function resta(n1,n2){
	return n1-n2;
}

function multiplicar(n1,n2){
	return n1*n2;
}

function dividir(n1,n2){
	return n1/n2;
}

class Operaciones extends React.Component {
  
 

    render(){
        return (
        	<div>
                 <h1 className="text-center">Operaciones</h1>
                 <div className="container text-center">
                   <div>{suma(n1,n2)}</div>
                   <div>{resta(n1,n2)}</div>
                   <div>{multiplicar(n1,n2)}</div>
                   <div>{dividir(n1,n2)}</div>

                 </div>
            </div>
            
        );
    }



}



export default Operaciones;