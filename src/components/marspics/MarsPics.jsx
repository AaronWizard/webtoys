import React from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { getPhotosByDate } from '../../apis/mars';

import HomeLink from '../HomeLink';

class MarsPics extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			selectedDate: null,
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

	selectNewDate = (date) => this.setState({ selectedDate: date });

	showDatePicker()
	{
		let result = null;
		const { selectedDate, photosByDate } = this.state;
		if (photosByDate)
		{
			result = (
				<DatePicker
					selected={selectedDate}
					onChange={this.selectNewDate}
				/>
			);
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
