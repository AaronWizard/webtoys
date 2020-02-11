import React from 'react';

import getDogs from '../../apis/dogs';

import ImageWheel from './ImageWheel';
import HomeLink from '../HomeLink';

const dogCount = 7;

class ViewDogs extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			dogs: [],
			addingDog: false,
		};
	}

	componentDidMount()
	{
		getDogs(dogCount).then((dogs) => this.setState({ dogs }));
	}

	moreDogs = () =>
	{
		const { addingDog } = this.state;
		if (!addingDog)
		{
			getDogs().then((newDogs) =>
			{
				this.setState((state) =>
				{
					const { dogs } = state;
					const updatedDogs = dogs.concat(newDogs);

					return {
						dogs: updatedDogs,
						addingDog: true,
					};
				});

				setTimeout(() =>
				{
					this.setState((state) =>
					{
						const { dogs } = state;
						const updatedDogs = dogs.slice(1);

						return {
							dogs: updatedDogs,
							addingDog: false,
						};
					});
				}, 500);
			});
		}
	};

	render()
	{
		const { dogs, addingDog } = this.state;
		return (
			<div>
				<h2>View Dogs</h2>
				<div className="dog-view">
					<ImageWheel images={dogs} rotating={addingDog} />
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
