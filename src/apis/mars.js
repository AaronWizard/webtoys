import axios from 'axios';

const manifestUrl = 'https://api.nasa.gov/mars-photos/api/v1/manifests/';
const photosUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/';

const apiParam = 'api_key';
const apiKey = 'tFPZ7zyymiSFoakJbTBeQcsksFrWPDexX8FscUZ9';

const earthDateParam = 'earth_date';
const cameraParam = 'camera';

const rovers = ['curiosity', 'opportunity', 'spirit'];
const cameraFilters = ['MAST', 'NAVCAM', 'PANCAM'];

const cameraInFilter = (camera) => cameraFilters.includes(camera);

const getPhotosManifestFromRover = async (rover) =>
{
	const url = `${manifestUrl}${rover}?${apiParam}=${apiKey}`;
	const resp = await axios.get(url);
	const manifest = resp.data.photo_manifest;
	const photos = manifest.photos.filter((p) => (
		p.cameras.some((c) => cameraInFilter(c))
	));

	return { rover, photos };
};

const getPhotoLinksFromRover = async (dateStr, rover, camera) =>
{
	const url = `${photosUrl}${rover}/photos?${apiParam}=${apiKey}`
		+ `&${earthDateParam}=${dateStr}&${cameraParam}=${camera}`;
	const resp = await axios.get(url);

	console.log(url);

	return resp.data.photos;
};

export const getPhotosDataByDate = async () =>
{
	const photosByDate = {};

	const manifestResults = [];

	for (let i = 0; i < rovers.length; i += 1)
	{
		const rover = rovers[i];
		manifestResults.push(getPhotosManifestFromRover(rover));
	}
	const results = await Promise.all(manifestResults);

	results.forEach(({ rover, photos }) =>
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

	return photosByDate;
};

export const getPhotoLinks = async (dateStr, photosData) =>
{
	const photoLinks = [];

	const photoResults = [];

	for (let i = 0; i < photosData.length; i += 1)
	{
		const { rover, cameras } = photosData[i];
		for (let j = 0; j < cameras.length; j += 1)
		{
			const camera = cameras[j];
			photoResults.push(getPhotoLinksFromRover(dateStr, rover, camera));
		}
	}
	const results = await Promise.all(photoResults);

	console.log('have results');
	console.log(results);

	return photoLinks;
};
