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

	filterDate = (date) =>
	{
		const { photosByDate } = this.state;
		const dateKey = date.toISOString().split('T')[0];
		return Object.prototype.hasOwnProperty.call(photosByDate, dateKey);
	}

	selectNewDate = (date) =>
	{
		this.setState({ selectedDate: date });
	};

	showDatePicker()
	{
		let result = null;
		const { selectedDate, photosByDate } = this.state;
		if (photosByDate)
		{
			result = (
				<DatePicker
					selected={selectedDate}
					filterDate={this.filterDate}
					onChange={this.selectNewDate}
					placeholderText="Select a day"
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
					<p>See pictures from Mars taken at a set date.</p>

					{this.showDatePicker()}
				</div>
				<HomeLink />
			</>
		);
	}
}

export default MarsPics;
