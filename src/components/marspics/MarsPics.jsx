import React from 'react';

import { getPhotosByDate } from '../../apis/mars';

import HomeLink from '../HomeLink';

class MarsPics extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			photosByDate: null,
		};
	}

	componentDidMount()
	{
		getPhotosByDate().then((photosByDate) =>
		{
			this.setState({ photosByDate });
		});
	}

	showDatePicker()
	{
		let result = null;
		const { photosByDate } = this.state;
		if (photosByDate)
		{
			console.log(photosByDate);
			result = <p>Pick a date</p>;
		}
		else
		{
			result = <p>Loading</p>;
		}
		return result;
	}

	render()
	{
		return (
			<>
				<h2>Mars Pics</h2>
				<div>
					<p>See pictures from Mars. Pick a Mars rover and a date.</p>

					{this.showDatePicker()}
				</div>
				<HomeLink />
			</>
		);
	}
}

export default MarsPics;
