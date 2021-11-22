import React from 'react';
import img from '../../images/contact.svg';
import './Contact.css';

const Contact = () => {

	const url = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14614.186938159863!2d90.4975175278814!3d23.692162201924578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b6eaa4dd584b%3A0x9a981059ad4e12a7!2sHirazheel%2C%20Siddhirganj!5e0!3m2!1sen!2sbd!4v1634523271835!5m2!1sen!2sbd";



	return (
		<div>
			<div className="banner text-center mb-5 py-4">
				<h1 className="fw-bold">Contact Us</h1>
				<h5>We'd love to hear from you</h5>
			</div>

			<div className="container">
			<div className="row row-cols-1 row-cols-md-2 d-flex justify-content-center my-5 ">
			<div className="col-6 text-center">
				<h1 className="text-danger mt-4">Adress</h1>

				<h5>Al-hera Bhaban</h5>
				<p><i className="fas fa-map-marker-alt"></i> 167/B, Siddhirganj Narayangonj,<br/> Dhaka, Bangladesh.</p>
				<p><i className="fas fa-envelope"> </i> Email : info@jananibd.com
				</p>
				<p><i className="fas fa-phone-square-alt"></i> Mobile : 01731 956, 01552 468</p>
			</div>
			<div className="col">
				<img className="img-fluid" src={img} alt="" />
			</div>
			</div>
			</div>

			<div>
			<div className="wrapper border border-2">

<div className="card">
<form className="d-flex flex-column">
	<div className="h3 text-center mt-2 fw-bold">Contact Form</div>
	<div className="d-flex align-items-center input-field my-3 mb-4 te text-dark"> <span className="far fa-user p-2"></span> <input type="text" placeholder="Name" required className="form-control text-dark"/>
	</div>

	<div className="d-flex align-items-center input-field mb-4 text-dark"> <span className="fas fa-envelope p-2"></span> <input type="text" placeholder="Email" required className="form-control" id="pwd"/>

	</div>

	<textarea className="mb-3" name="text" rows="4" placeholder="Write something..." ></textarea>

	<div className="my-3"> <button type="submit" className="btn btn-danger rounded-pill px-5 py-2"> Submit </button>  </div>
</form>

	</div>
	</div>
			</div>
			<h1 className="text-center fw-bold"> Find us On Google Map</h1>
			<div className="mt-4">
			<iframe title="Google map" className="map" src={url}></iframe>
			</div>
		</div>
	)
}

export default Contact;
