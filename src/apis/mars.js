import axios from 'axios';

const manifestUrl = 'https://api.nasa.gov/mars-photos/api/v1/manifests/';

const apiParam = 'api_key';
const apiKey = 'tFPZ7zyymiSFoakJbTBeQcsksFrWPDexX8FscUZ9';

const rovers = ['curiosity', 'opportunity', 'spirit'];
const cameraFilters = ['MAST', 'NAVCAM', 'PANCAM'];

const cameraInFilter = (camera) => cameraFilters.includes(camera);

export const getPhotosByDate = async () =>
{
	const photosByDate = {};

	const rover = rovers[0];
	const url = `${manifestUrl}${rover}?${apiParam}=${apiKey}`;
	const resp = await axios.get(url);
	const manifest = resp.data.photo_manifest;

	manifest.photos.filter((p) => (
		p.cameras.some((c) => cameraInFilter(c))
	)).forEach((p) =>
	{
		const date = p.earth_date;
		if (!Object.prototype.hasOwnProperty.call(photosByDate, date))
		{
			photosByDate[date] = [];
		}
		photosByDate[date].push(
			{
				rover,
				cameras: p.cameras.filter((c) => cameraInFilter(c)),
			},
		);
	});

	return photosByDate;
};

export const getPhotos = async () =>
{

};
