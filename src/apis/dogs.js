import axios from 'axios';

const url = 'https://dog.ceo/api/breeds/image/random/';

const getDogs = (count = 1) => axios.get(`${url}${count}`)
	.then((resp) => resp.data);

export default getDogs;
