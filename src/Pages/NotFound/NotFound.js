import React from 'react';
import img from '../../images/404.svg';

const NotFound = () => {
	return (
		<div>
			<div className="container my-5 py-5">
				<div className="text-center">
				<img className="img-fluid" src={img} alt="" />
				<h1 className="text-danger mt-5">Page Not Found</h1>
				</div>
			</div>
		</div>
	)
}

export default NotFound;
