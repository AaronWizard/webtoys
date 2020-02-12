import React from 'react';

import getDogs from '../../apis/dogs';

import ImageWheel from './ImageWheel';
import HomeLink from '../HomeLink';

import styles from '../../styles/viewdogs.module.scss';

const initialDogCount = 7;

const rotationSeconds = 0.25;
const milliseconds = 1000;
const rotationTime = rotationSeconds * milliseconds;

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
		const { dogs } = this.state;
		getDogs(dogs, initialDogCount).then((newDogs) =>
		{
			this.setState({ dogs: newDogs });
		});
	}

	moreDogs = () =>
	{
		const { dogs, addingDog } = this.state;
		if (!addingDog)
		{
			getDogs(dogs, initialDogCount + 1).then((newDogs) =>
			{
				this.setState({
					dogs: newDogs,
					addingDog: true,
				});

				setTimeout(() =>
				{
					this.setState((state) =>
					{
						const updatedDogs = state.dogs.slice(1);

						return {
							dogs: updatedDogs,
							addingDog: false,
						};
					});
				}, rotationTime);
			});
		}
	};

	render()
	{
		const { dogs, addingDog } = this.state;
		return (
			<div>
				<h2>View Dogs</h2>
				<div className={styles.dogview}>
					<ImageWheel images={dogs} rotating={addingDog} />
					<div className={styles.viewbox} />
					<button
						type="button"
						onClick={this.moreDogs}
					>
						<div className={styles.viewboxbutton}>
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
