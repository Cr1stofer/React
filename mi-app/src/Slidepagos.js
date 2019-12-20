import React from 'react';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'font-awesome/css/font-awesome.min.css';


class Slidepagos extends React.Component {

  render(){
  	return(
	     <>
	      <div className="display-4 text-center">Paga como quieras</div>
		    <Container fluid className="m-container">  
		      <Row>
		         <Col lg="3">
		             <div className="pay-color">Pago contra Entrega  <i className="fas fa-money-bill-alt"></i></div>
		         </Col>
		         <Col lg="3">
		             <div className="pay-color">Deposito</div>
		         </Col>
		         <Col lg="3">
		             <div className="pay-color">Transferencia</div>
		         </Col>
		         <Col lg="3">
		             <div className="pay-color">Tarjeta</div>
		         </Col>
		      </Row>
		     </Container>
	       
	     </>
  	)
  }



}



export default Slidepagos;