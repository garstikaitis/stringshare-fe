import axios from 'axios';

const setAuthHeaders = ({ token = '' } = {}) => {
  const headers = {
    Authorization: token ? `Bearer ${token}` : '',
  };
  axios.defaults.headers.common = headers;
};

export { setAuthHeaders };
