import { setAuthHeaders, authenticateUser } from '@/api/auth';
import { requiredParam } from '@/utils/validation';

export const state = {
  user: null,
  token: window.localStorage.getItem('token') || null,
};

export const getters = {};

export const actions = {
  // eslint-disable-next-line no-shadow
  init({ state }) {
    setAuthHeaders({ token: state.token });
  },
  logInUser({ commit }, { email, password }) {
    // Authenticate the user and
    // get the auth token and user data
    return authenticateUser({ email, password }).then((response) => {
      // Set the default headers with users token
      const { data } = response;

      window.localStorage.setItem('token', data.token);
      setAuthHeaders({ token: data.token });

      commit('SET_USER', { key: 'user', newValue: data.user });

      // Return user object
      return data;
    });
  },
};

export const mutations = {
  // eslint-disable-next-line no-shadow
  SET_USER(state, { key = requiredParam('key'), newValue = requiredParam('newValue') } = {}) {
    state[key] = newValue;
  },
};
