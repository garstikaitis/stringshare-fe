import axios from 'axios';
import { requiredParam } from '../../utils/validation';

const getProposals = () => axios.get('/proposals');

const postProposal = ({ band = requiredParam('band'), venue = requiredParam('venue') } = {}) => axios.post('/proposals', { venue, band });

export { getProposals, postProposal };
