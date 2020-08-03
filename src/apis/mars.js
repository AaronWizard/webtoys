import axios from 'axios';

const manifestUrl = 'https://api.nasa.gov/mars-photos/api/v1/manifests/';

const apiParam = 'api_key';
const apiKey = 'tFPZ7zyymiSFoakJbTBeQcsksFrWPDexX8FscUZ9';

const rovers = ['curiosity', 'opportunity', 'spirit'];
const cameraFilters = ['MAST', 'NAVCAM', 'PANCAM'];

const cameraInFilter = (camera) => cameraFilters.includes(camera);

const getPhotosFromRover = async (rover) =>
{
	const url = `${manifestUrl}${rover}?${apiParam}=${apiKey}`;
	const resp = await axios.get(url);
	const manifest = resp.data.photo_manifest;
	const photos = manifest.photos.filter((p) => (
		p.cameras.some((c) => cameraInFilter(c))
	));

	return photos;
};

export const getPhotosByDate = async () =>
{
	const photosByDate = {};

	for (let i = 0; i < rovers.length; i += 1)
	{
		const rover = rovers[i];
		getPhotosFromRover(rover).then((photos) =>
		{
			photos.forEach((p) =>
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
		});
	}

	return photosByDate;
};

export const getPhotos = async () =>
{

};
