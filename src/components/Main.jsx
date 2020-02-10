import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import About from './about/About';
import PageNotFound from './pagenotfound/PageNotFound';

import ViewDogs from './viewdogs/ViewDogs';

const Main = () => (
	<Router basename="/">
		<main>
			<Switch>
				<Route exact path="/" component={About} />
				<Route exact path="/viewdogs" component={ViewDogs} />
				<Route component={PageNotFound} />
			</Switch>
		</main>
	</Router>
);

export default Main;
