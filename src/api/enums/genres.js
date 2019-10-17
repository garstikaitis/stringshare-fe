import axios from 'axios';

const getGenres = () => axios.get('/enums/genres');

export { getGenres };
