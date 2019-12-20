import React from 'react';

import './App.css';


function Misimagenes(){
	return(
		   <>
           <img src={require('./imagenes/mueble-1.jpg')} alt="img" />
           <img src={require('./imagenes/mueble-2.jpg')} alt="img" />
           <img src={require('./imagenes/mueble-3.jpg')} alt="img" />
           <img src={require('./imagenes/mueble-4.jpg')} alt="img" />
           <img src={require('./imagenes/mueble-5.jpg')} alt="img" />
           <img src={require('./imagenes/mueble-1.jpg')} alt="img" />
           <img src={require('./imagenes/mueble-2.jpg')} alt="img" />
           <img src={require('./imagenes/mueble-3.jpg')} alt="img" />
           <img src={require('./imagenes/mueble-4.jpg')} alt="img" />
           <img src={require('./imagenes/mueble-5.jpg')} alt="img" />
           
           </>
		);
}

const mensaje = Misimagenes();

class Galeria extends React.Component {

  render(){
  	return(
	   <div className="Galeria">
	     <p>Hello Imagenes</p>
	     <div className="Galeria-2">
	      {mensaje}
	     </div>
	  	</div>
  	)
  }


}



export default Galeria;