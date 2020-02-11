import React from 'react';

import getDogs from '../../apis/dogs';

import ImageWheel from './ImageWheel';
import HomeLink from '../HomeLink';

const dogCount = 6;

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

	moreDogs = () =>
	{
		console.log('dogs');
	};

	render()
	{
		const { dogs } = this.state;
		return (
			<div>
				<h2>View Dogs</h2>
				<div className="dog-view">
					<ImageWheel images={dogs} />
					<div className="view-box" />
					<button
						type="button"
						onClick={this.moreDogs}
					>
						<div className="view-box-button">
							More dogs
						</div>
					</button>
				</div>
				<HomeLink />
			</div>
		);
	}
}

export default ViewDogs;
