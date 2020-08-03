import React from 'react';

import HomeLink from '../HomeLink';

class MarsPics extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {

		};
	}

	componentDidMount()
	{

	}

	render()
	{
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
