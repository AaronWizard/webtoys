import React from 'react';

import getDogs from '../../apis/dogs';

import HomeLink from '../HomeLink';

class ViewDogs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		getDogs().then((dogs) => console.log(dogs));
	}

	render() {
		return (
			<div>
				View Dogs
				<HomeLink />
			</div>
		);
	}
}

export default ViewDogs;
