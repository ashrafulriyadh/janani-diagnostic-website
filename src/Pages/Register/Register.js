import React from 'react'
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {

	//get all value
	const {handleDisplayName,handleCreateEmail,handleCreatePassword,handleRegister} = useAuth();

	return (
		<div>
			<div className="wrapper">

	<div className="card">
<form onSubmit={handleRegister}  className="d-flex flex-column">
	<div className="h3 text-center mt-2">Register</div>

	<div className="d-flex align-items-center input-field my-3 mb-2 te text-dark"> <span className="far fa-user p-2"></span>

	<input onBlur={handleDisplayName} type="text" placeholder="User Name" required className="form-control text-dark"/> </div>

	<div className="d-flex align-items-center input-field my-3 mb-4 te text-dark"> <span className="fas fa-envelope p-2"></span>

	<input onBlur={handleCreateEmail} type="text" placeholder="Your Email" required className="form-control text-dark"/>
	</div>

	<div className="d-flex align-items-center input-field mb-4 text-dark"> <span className="fas fa-lock p-2"></span>

	<input onBlur={handleCreatePassword} type="password" placeholder="Your Password" required className="form-control" id="pwd"/>

	<button className="btn"> <span className="fas fa-eye-slash"></span> </button> </div>

	<div className="my-3"> <button type="submit" className="btn btn-danger rounded-pill px-5 py-2"> Sign Up </button>  </div>

	<div className="mb-3 "> <span className="text-dark">Already have an account?</span> <Link className="text-danger" to="/login">Log in here</Link> </div>
</form>

	</div>
	</div>

		</div>
	)
}

export default Register;
