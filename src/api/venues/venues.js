import axios from 'axios';

const getVenues = () => axios.get('/venues');

export { getVenues };
