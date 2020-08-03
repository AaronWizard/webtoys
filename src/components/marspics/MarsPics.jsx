import React from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { getPhotosDataByDate, getPhotoLinks } from '../../apis/mars';

import HomeLink from '../HomeLink';

class MarsPics extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			selectedDate: null,
			photosDataByDate: null,
		};
	}

	componentDidMount()
	{
		getPhotosDataByDate().then((photosDataByDate) =>
		{
			this.setState({ photosDataByDate });
		});
	}

	dateToKey = (date) => date.toISOString().split('T')[0];

	filterDate = (date) =>
	{
		const { photosDataByDate } = this.state;
		const dateKey = this.dateToKey(date);
		return Object.prototype.hasOwnProperty.call(photosDataByDate, dateKey);
	}

	selectNewDate = (date) =>
	{
		this.setState({ selectedDate: date });

		const { photosDataByDate } = this.state;
		const dateKey = this.dateToKey(date);
		const photosData = photosDataByDate[dateKey];
		getPhotoLinks(dateKey, photosData).then((photos) =>
		{
			console.log('done');
			console.log(photos);
		});
	};

	showDatePicker()
	{
		let result = null;
		const { selectedDate, photosDataByDate } = this.state;
		if (photosDataByDate)
		{
			result = (
				<DatePicker
					selected={selectedDate}
					filterDate={this.filterDate}
					onChange={this.selectNewDate}
					dateFormat="yyyy-MM-dd"
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
