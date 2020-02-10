import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import About from './about/About';
import ViewDogs from './viewdogs/ViewDogs';

const Main = () => (
	<Router basename="/">
		<main>
			<Route exact path="/" component={About} />
			<Route path="/viewdogs" component={ViewDogs} />
		</main>
	</Router>
);

export default Main;
