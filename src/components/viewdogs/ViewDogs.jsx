import React from 'react';

import getDogs from '../../apis/dogs';

import TabLink from '../TabLink';
import HomeLink from '../HomeLink';

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
		getDogs(5).then((dogs) => this.setState({ dogs }));
	}

	renderDogs()
	{
		let result = <p>Loading</p>;

		const { dogs } = this.state;
		if (dogs.length === 1)
		{
			result = (
				<TabLink url={dogs[0]}>
					<div className="dog">
						<img src={dogs[0]} alt={dogs[0]} />
					</div>
				</TabLink>
			);
		}
		else if (dogs.length > 1)
		{
			result = dogs.map((dog) => (
				<TabLink url={dog}>
					<div className="dog">
						<img src={dog} alt={dog} />
					</div>
				</TabLink>
			));
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
