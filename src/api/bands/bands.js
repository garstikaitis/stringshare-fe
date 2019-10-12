import axios from 'axios';

const getBands = () => axios.get('bands');

export { getBands };
