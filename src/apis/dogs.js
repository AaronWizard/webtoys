import axios from 'axios';

const url = 'https://dog.ceo/api/breeds/image/random/';

const maxAllowedErrors = 5;

const getDogs = async (currentDogs, maxDogs) =>
{
	let result = currentDogs;
	let errorCount = 0;

	while (result.length < maxDogs)
	{
		try
		{
			const resp = await axios.get(`${url}${maxDogs - result.length}`);
			const newDogs = resp.data.message;
			const allDogs = result.concat(newDogs);
			const filteredDogs = allDogs.filter((d, i) => (
				(allDogs.indexOf(d) === i) && (d.split('.').pop() !== 'txt')
			));
			result = filteredDogs;
			errorCount = 0;
		}
		catch (error)
		{
			console.error(`Error loading dog pics: ${error}`);
			++errorCount;
			if (errorCount > maxAllowedErrors)
			{
				break;
			}
		}
	}

	return result;
};

export default getDogs;
