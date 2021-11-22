import React from 'react'
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';

const Header = () => {

  const {user, logout} = useAuth();

	return (
		<div>
			{/* navbar start */}
			<section>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
	  <img src={logo} height="50" alt="" />
    <Link className="navbar-brand fw-bold" to="/home">Janani Diagnostic</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-lg-end" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/contact">Contact Us</Link>
        </li>
      </ul>
      <div>
      <ul className="navbar-nav">
        {
          !user.email &&
          <li className="nav-item">
          <Link className="nav-link active mt-2" aria-current="page" to="/login">Login</Link>
        </li>
        }
        {
          user.email &&
          <li className="nav-item">
          <Link className="nav-link active mt-2" aria-current="page" to="#">Hello, {user.displayName}</Link>
        </li>

        }
        {
          !user.email &&
          <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/register"><button className="btn btn-danger rounded-pill">Sign Up</button></Link>
        </li>
        }

        {
          user.email &&
          <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home"><button onClick={logout} className="btn btn-danger rounded-pill">Log Out</button></Link>
        </li>
        }
		</ul>
      </div>
    </div>
  </div>
</nav>
			</section>
		</div>
	)
}

export default Header;
