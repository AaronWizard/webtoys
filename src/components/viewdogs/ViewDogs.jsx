import React from 'react';

import getDogs from '../../apis/dogs';

import ImageWheel from './ImageWheel';
import HomeLink from '../HomeLink';

const dogCount = 6;
const slideCount = 14;

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
		getDogs(dogCount).then((dogs) => this.setState({ dogs }));
	}

	render()
	{
		const { dogs } = this.state;
		return (
			<div>
				<h2>View Dogs</h2>
				<div className="dog-view">
					<ImageWheel images={dogs} slideCount={slideCount} />
					<div className="view-box" />
					<div className="view-box-button">More dogs</div>
				</div>
				<HomeLink />
			</div>
		);
	}
}

export default ViewDogs;
