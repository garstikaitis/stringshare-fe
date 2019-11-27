import axios from 'axios';
import { requiredParam } from '@/utils/validation';

const getBands = () => axios.get('/bands');

const getBand = ({ slug = requiredParam('slug') } = {}) => axios.get(`/bands/${slug}`);

export { getBands, getBand };
