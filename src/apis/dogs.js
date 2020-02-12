import axios from 'axios';

const url = 'https://dog.ceo/api/breeds/image/random/';

const getDogs = async (currentDogs, maxDogs) =>
{
	let result = currentDogs;

	while (result.length < maxDogs)
	{
		// eslint-disable-next-line no-await-in-loop
		const resp = await axios.get(`${url}${maxDogs - result.length}`);

		const newDogs = resp.data.message;
		const allDogs = result.concat(newDogs);
		const filteredDogs = allDogs.filter((d, i) => allDogs.indexOf(d) === i);
		result = filteredDogs;
	}

	return result;
};

export default getDogs;
