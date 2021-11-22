import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
	return (
		<div>
      {/* footer start */}
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>Janani Diagnostic</h6>
            <p className="text-justify">The professional standard and the expertise on health care facilities are the pillars of success of Janani. It is noticeable that a gap exists between patient expectations and provided health care services in Bangladesh. As a result, a remarkable number of people go abroad to avail quality medical services. </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Services</h6>
            <ul className="footer-links ">
              <li><Link className="text-decoration-none"to="#">X-Ray</Link></li>
              <li><Link className="text-decoration-none" to="#">CT Scan</Link></li>
              <li><Link className="text-decoration-none" to="#">MRI</Link></li>
              <li><Link className="text-decoration-none" to="#">Endoscopy</Link></li>
              <li><Link className="text-decoration-none" to="#">ECG</Link></li>
              <li><Link className="text-decoration-none" to="#">OPG</Link></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
			<li><Link className="text-decoration-none" to="/home">Home</Link></li>
              <li><Link className="text-decoration-none" to="/about">About Us</Link></li>
              <li><Link className="text-decoration-none" to="/contact">Contact Us</Link></li>
              <li><Link className="text-decoration-none" to="/login">Login</Link></li>
              <li><Link className="text-decoration-none" to="/register">Register</Link></li>
              <li><Link className="text-decoration-none" to="#">Terms & Condition</Link></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by
         <Link className="text-decoration-none" to="#"> Ashraful</Link>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><Link className="facebook" to="#"><i className="fa fa-facebook"></i></Link></li>
              <li><Link className="twitter" to="#"><i className="fa fa-twitter"></i></Link></li>
              <li><Link className="dribbble" to="#"><i className="fa fa-dribbble"></i></Link></li>
              <li><Link className="linkedin" to="#"><i className="fa fa-linkedin"></i></Link></li>
            </ul>
          </div>
        </div>
      </div>
</footer>
		</div>
	)
}

export default Footer;
