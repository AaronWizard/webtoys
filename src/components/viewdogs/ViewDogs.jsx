import React from 'react';

import getDogs from '../../apis/dogs';

import ImageWheel from './ImageWheel';
import TabLink from '../TabLink';
import PopupImage from '../PopupImage';
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
			currentDog: null,
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

	clickDog = (dog) => this.setState({ currentDog: dog });

	popupHidden = () => this.setState({ currentDog: null });

	showCurrentDog()
	{
		let result = null;
		const { currentDog } = this.state;
		if (currentDog)
		{
			result = (
				<PopupImage src={currentDog} onHidden={this.popupHidden} />
			);
		}
		return result;
	}

	render()
	{
		const { dogs, addingDog } = this.state;
		return (
			<>
				<h2>View Dogs</h2>
				<div className={styles.dogview}>
					<ImageWheel
						images={dogs}
						rotating={addingDog}
						onClick={this.clickDog}
					/>
					<div className={styles.viewbox}>
						<p>
							Early in my career the company I worked for did a
							web project for&nbsp;
							<TabLink
								url="https://en.wikipedia.org/wiki/Fisher-Price"
							>
								Fisher-Price
							</TabLink>
							, related to their&nbsp;
							<TabLink
								url="https://en.wikipedia.org/wiki/View-Master"
							>
								View-Master
							</TabLink>
							&nbsp;brand. I created a web site featuring a wheel
							of images that could be turned like a real
							View-Master toy.
						</p>
						<p>
							At the time I had only jQuery to work with. Now, I
							can recreate that image wheel using React and CSS
							animations enhanced by Sass.
						</p>
						<p>
							The image wheel I made for Fisher-Price used images
							taken from an online catalog. For this image wheel,
							I load pictures from&nbsp;
							<TabLink url="https://dog.ceo/dog-api/">
								Dog API
							</TabLink>
							.
						</p>
					</div>
					<button
						type="button"
						onClick={this.moreDogs}
						className={styles.viewboxbutton}
					>
						More dogs
					</button>
				</div>
				<HomeLink />
				{this.showCurrentDog()}
			</>
		);
	}
}

export default ViewDogs;
