import React from 'react'
import { useParams } from 'react-router';
import img from '../../images/report.jpg';
import './ServiceDetails.css'

const ServiceDetails =() => {

	//useParam hook for dynamic
	const {name} = useParams();

	return (
		<div>
			<div className="container">
				<h1 className="text-center my-5 fw-bold">
					{name}
				</h1>

				<div className="row row-cols-1 ">
				<div className="col d-flex justify-content-center" >
					<img className="report-img" src={img} alt="" />
				</div>
				</div>

				<h2 className="text-center my-5">We Provide best services with the best equipment. We will also give you {name} test reports. Get your <span className="fw-bold">{name}</span> reports directly from our diagnostic </h2>
			</div>
		</div>
	)
}

export default ServiceDetails;
