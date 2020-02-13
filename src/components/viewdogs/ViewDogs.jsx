import React from 'react';

import getDogs from '../../apis/dogs';

import ImageWheel from './ImageWheel';
import HomeLink from '../HomeLink';

import styles from '../../styles/viewdogs.module.scss';

const dogCount = 10; // viewdogs.module.scss, $_slide-count
const visibleDogs = 4;

const rotationSeconds = 0.25; // viewdogs.module.scss, $_rotationTime
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
		getDogs(dogs, dogCount).then((newDogs) =>
		{
			this.setState({ dogs: newDogs });
		});
	}

	moreDogs = () =>
	{
		this.setState({
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
			const { dogs } = this.state;
			if (dogs.length === visibleDogs)
			{
				getDogs(dogs, dogCount).then((newDogs) =>
				{
					this.setState({ dogs: newDogs });
				});
			}
		}, rotationTime);
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
						className={styles.viewboxbutton}
					>
						More dogs
					</button>
				</div>
				<HomeLink />
			</div>
		);
	}
}

export default ViewDogs;
