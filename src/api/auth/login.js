import axios from 'axios';
import { requiredParam } from '@/utils/validation';

const authenticateUser = ({
  email = requiredParam('email'),
  password = requiredParam('password'),
} = {}) => axios.post('/login', { email, password });

const fetchUser = ({ userId = requiredParam('userId') } = {}) => axios.get(`/users/${userId}`);

export { authenticateUser, fetchUser };
