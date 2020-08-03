import React from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { getPhotosDataByDate, getPhotoLinks } from '../../apis/mars';

import PopupImage from '../PopupImage';
import HomeLink from '../HomeLink';

import styles from '../../styles/marspics.module.scss';

class MarsPics extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			photosDataByDate: null,
			selectedDate: null,
			photos: [],
			loadingPhotos: false,
			currentPhoto: null,
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

	selectNewDate = async (date) =>
	{
		this.setState({
			photos: [],
			loadingPhotos: true,
		});

		const { photosDataByDate } = this.state;
		const dateKey = this.dateToKey(date);
		const photosData = photosDataByDate[dateKey];
		const photos = await getPhotoLinks(dateKey, photosData);

		this.setState({
			selectedDate: date,
			photos,
			loadingPhotos: false,
		});
	};

	clickPhoto = (photo) => this.setState({ currentPhoto: photo });

	popupHidden = () => this.setState({ currentPhoto: null });

	showDatePicker()
	{
		let result = null;
		const { selectedDate, photosDataByDate } = this.state;
		if (photosDataByDate)
		{
			result = (
				<DatePicker
					className={styles.datepicker}
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

	showPhotos()
	{
		let result = null;

		const { photos, loadingPhotos } = this.state;
		if (photos.length > 0)
		{
			result = (
				<div className={styles.photos}>
					{photos.map((p) => (
						<button
							key={p.imageURL}
							className={styles.photowrapper}
							type="button"
							onClick={() => this.clickPhoto(p.imageURL)}
						>
							<img src={p.imageURL} alt={p.rover} />
						</button>
					))}
				</div>
			);
		}
		else if (loadingPhotos)
		{
			result = <div className={styles.photos}>Loading photos</div>;
		}

		return result;
	}

	showCurrentPhoto()
	{
		let result = null;
		const { currentPhoto } = this.state;
		if (currentPhoto)
		{
			result = (
				<PopupImage src={currentPhoto} onHidden={this.popupHidden} />
			);
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
					{this.showPhotos()}
				</div>
				<HomeLink />
				{this.showCurrentPhoto()}
			</>
		);
	}
}

export default MarsPics;
