import React from 'react';

import './App.css';

class Slide extends React.Component {

  render(){
  	return(
       <>
         <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
			  <div class="carousel-inner">
			    <div class="carousel-item active">
			      <img src="https://i.pinimg.com/originals/35/eb/7d/35eb7d5bce221d9392feb1e426ba48af.jpg" class="d-block w-100" alt="imagen 1" height="400"/>
			      <div class="carousel-caption d-none d-md-block">
			        <h5>First slide label</h5>
			        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
			      </div>
			    </div>
			    <div class="carousel-item">
			      <img src="http://www.hdfondos.eu/preview/get_photo/522122/1920/1200" class="d-block w-100" alt="imagen 2" height="400"/>
			      <div class="carousel-caption d-none d-md-block">
			        <h5>Second slide label</h5>
			        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
			      </div>
			    </div>
			    <div class="carousel-item">
			      <img src="http://www.hdfondos.eu/preview/get_photo/717282/2560/1600" class="d-block w-100" alt="imagen 3" height="400"/>
			      <div class="carousel-caption d-none d-md-block">
			        <h5>Third slide label</h5>
			        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
			      </div>
			    </div>
			  </div>
			  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
			    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
			    <span class="sr-only">Previous</span>
			  </a>
			  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
			    <span class="carousel-control-next-icon" aria-hidden="true"></span>
			    <span class="sr-only">Next</span>
			  </a>
		  </div>
       </>
  	)
  }



}



export default Slide;