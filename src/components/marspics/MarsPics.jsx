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

	render()
	{
		const { photosByDate } = this.state;
		console.log(photosByDate);
		return (
			<>
				<h2>Mars Pics</h2>
				<div>
					<p>See pictures from Mars. Pick a Mars rover and a date.</p>
				</div>
				<HomeLink />
			</>
		);
	}
}

export default MarsPics;
