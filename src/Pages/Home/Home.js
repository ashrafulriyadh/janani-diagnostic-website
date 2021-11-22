import React from 'react';
import useServices from '../../hooks/useServices';
import img1 from "../../images/slider1.jpg";
import img2 from "../../images/slider2.jpg";
import img3 from "../../images/slider3.jpg";
import Service from '../Service/Service';
import './Home.css';


const Home = () => {

	const [services] = useServices();

	return (
		<div>
			{/* carousel start */}
			<section>
			<div>
			<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} className="d-block w-100 img-fluid carousel-image" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className="text-dark">Best Technology</h5>
        <p className="text-dark">We have the best equipment for test in Country</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block w-100 img-fluid carousel-image" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Professional Staff</h5>
        <p>We test every single test carefully with our Professionals</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block w-100 img-fluid carousel-image" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Best Care & Best Doctor</h5>
        <p>We have the best doctors in Country</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
			</div>
			</section>

			{/* services */}
			<section>
				<div>
					<div className="text-center my-5">
					<h1 className="fw-bold"> Services </h1>
					</div>

					<div className="container">
						<div className="row row-cols-1 row-cols-md-3 g-4">
						{
				 services?.map(service => <Service key={service.name} service={service}></Service>  )
			}
						</div>
					</div>
				</div>
			</section>

			{/* expert */}
			<section>
				<div className="container">
					<h1 className="my-5 text-center fw-bold">
						Our Expert Technologist
					</h1>

					<div className="row row-cols-1 row-cols-md-3 g-4 my-5 text-center">
  <div className="col" >
    <div className="card h-100 hvr-ripple-in">
      <img src="https://i.ibb.co/Y8kWvyH/photo-1581093583449-8255a7d46e66.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h4 className="card-title">Olivia Giroude </h4>
        <p className="card-text">Expert in X-Ray Machines and with the other equipments.</p>
		<p className="fs-3"><i className="fab fa-facebook mx-2"> </i> <i className="fab fa-instagram-square mx-2"></i> <i className="fab fa-pinterest-square mx-2"></i></p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 hvr-ripple-in">
      <img src="https://i.ibb.co/r2JBCSK/ashkan-forouzani-DPEPYPBZp-B8-unsplash-1.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h4 className="card-title">Sunil Grover</h4>
        <p className="card-text">Expert in Neuro Science with technological knowledge in MRI and CT scan machines</p>
		<p className="fs-3"><i className="fab fa-facebook mx-2"> </i> <i className="fab fa-instagram-square mx-2"></i> <i className="fab fa-pinterest-square mx-2"></i></p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 hvr-ripple-in">
      <img src="https://i.ibb.co/rbcjnMm/science-shutterstock-860x430-1.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Christiana Lopez</h5>
        <p className="card-text">Expert in Micro Biology and micro-biological science along with micro machines</p>
		<p className="fs-3"><i className="fab fa-facebook mx-2"> </i> <i className="fab fa-instagram-square mx-2"></i> <i className="fab fa-pinterest-square mx-2"></i></p>
      </div>
    </div>
  </div>
</div>
				</div>
			</section>

			{/* faq */}
			<section>
				<div className="container">
					<h1 className="text-center fw-bold">
						Frequently Asked Question
					</h1>
				</div>

				<div className="container my-5">
				<div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Is there any doctor for checkup?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Yes, Of course.</strong> It There is also expert doctors for any kind of checkup. Best doctors of Country sit here for regular checkup. You may call for an appointment before come.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Do you use good equipments?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Sure 100% we use best equipment for every test.</strong> Our machines came from Germany. So we can provide better result for any kind of test. You can visit our Diagnostic center to see.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Do you open 24 hours ?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>We are afraid, we do not open for 24 hours.</strong> Our diagnostic will open at the morning and closes at night. We open our center at 9.00am and close 10.00pm everyday.
      </div>
    </div>

  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
        Do you provide service online ?
      </button>
    </h2>
    <div id="collapsefour" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>No we dont.</strong> Because you need to test your body parts physically. we can't do this online
      </div>
    </div>

  </div>
</div>
				</div>
			</section>
		</div>
	)
}

export default Home;
