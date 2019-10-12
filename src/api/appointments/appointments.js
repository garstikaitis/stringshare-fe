import axios from 'axios';

const getAppointments = () => axios.get('appointments');

export { getAppointments };
