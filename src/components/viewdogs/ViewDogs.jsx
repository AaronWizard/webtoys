import React from 'react';

import getDogs from '../../apis/dogs';

import ImageWheel from './ImageWheel';
import HomeLink from '../HomeLink';

const initialDogCount = 10;

class ViewDogs extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			dogs: [],
		};
	}

	componentDidMount()
	{
		getDogs(initialDogCount).then((dogs) => this.setState({ dogs }));
	}

	renderDogs()
	{
		let result = <p>Loading</p>;

		const { dogs } = this.state;
		if (dogs.length > 0)
		{
			result = <ImageWheel images={dogs} />;
		}

		return result;
	}

	render()
	{
		return (
			<div>
				<h2>View Dogs</h2>
				{this.renderDogs()}
				<HomeLink />
			</div>
		);
	}
}

export default ViewDogs;
