import React from 'react'
import { useHistory } from 'react-router';
import './Service.css';

const Service = ({service}) => {

	const {name,details,img,price} = service;

	const history = useHistory();

	const handleService = (name) => {
		history.push(`/services/${name}`);
	}

	return (
		<div className="col">
					 <div className="card h-100 box-shadow hvr-float-shadow">
						<div className="d-flex justify-content-center">
						<img src={img} className="card-img-top" alt="..."/>
						</div>
						<div className="card-body text-center">
							<h3 className="card-title">{name}</h3>
							<small className="card-text">{(details).slice(0, 90)}....</small>
							<h5 className="mt-2">{price}</h5>
							<button onClick={() => handleService(name)}  className="btn btn-danger rounded-pill my-3 px-4">Details
							</button>
						</div>
						</div>
				 </div>
	)
}

export default Service;
