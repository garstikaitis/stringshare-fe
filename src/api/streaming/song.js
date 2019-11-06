import axios from 'axios';

const getSong = () => axios({ url: '/streaming', responseType: 'blob' });

export { getSong };
