import React from 'react';
import { Link } from 'react-router-dom';

const About = () => (
	<div>
		A collection of front-end web projects.

		<ul>
			<li><Link to="/viewdogs">View Dogs</Link></li>
			<li><Link to="/marspics">Mars Pics</Link></li>
		</ul>
	</div>
);

export default About;
