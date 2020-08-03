import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import About from './about/About';
import PageNotFound from './pagenotfound/PageNotFound';

import ViewDogs from './viewdogs/ViewDogs';
import MarsPics from './marspics/MarsPics';

const Main = () => (
	<Router basename="/">
		<main>
			<Switch>
				<Route exact path="/" component={About} />
				<Route exact path="/viewdogs" component={ViewDogs} />
				<Route exact path="/marspics" component={MarsPics} />
				<Route component={PageNotFound} />
			</Switch>
		</main>
	</Router>
);

export default Main;
