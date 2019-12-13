import React from 'react';
import $ from 'jquery';

class Funciones extends React.Component {
//inicio mi constructor para dar valor a una variable
  
  /*constructor(props){
  	super(props);
  	this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
  	 $("#1").html("<strong>Hola!! soy el mensaje, intenta ocultarme :)</strong>");
  }*/

  constructor(props){
  	super(props);
  	this.state = {isToggleOn: true};

  	this.handleClick = this.handleClick.bind(this);
  }

   handleClick(){
   	this.setState(state =>({
   		isToggleOn: !state.isToggleOn
   	}));
   }

  render(){
  	return(
   <div>
        <h2 className="text-center">Area de pruebas con react js</h2>
	  	<button onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
  	</div>
  	)
  }



}



export default Funciones;