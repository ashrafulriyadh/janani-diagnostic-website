import React from 'react';
import img from '../../images/about.svg';
import './About.css'

const About = () => {
	return (
		<div>
			<div className="text-center mb-5 py-4 banner">
				<h2 className="fw-bold">Welcome to Janani Diagnostic</h2>
				<h3>----- We care ----- </h3>
			</div>
			<div className="text-center my-5 py-5 container">
			<p>Our Mission is to provide excellent health care services to all of our clients with dedication to meet their expectation.

            After inauguration in the year 2003 Janani started to take a lead in providing advanced health care services. The professional standard and the expertise on health care facilities are the pillars of success of Janani. It is noticeable that a gap exists between patient expectations and provided health care services in Bangladesh. As a result, a remarkable number of people go abroad to avail quality medical services. Understanding this phenomenon, Janani is committed to reduce the gap as much as possible; consequently, it is determined to ensure patient recovery with proper services in a Jananiable way within the shortest possible time and at an affordable cost. It is apparent that the company’s internal facilities, application of advanced technologies, patient management, before and after care attitude, personalized care services have made a positive difference in the health care sector of Bangladesh.</p>
			</div>
			{/* img section */}
			<div className="text-center my-5 py-5 ">
				<img className="img-fluid" src={img} alt="" />
			</div>



		</div>
	)
}

export default About
