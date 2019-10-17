import { getVenues } from '../../api/venues/venues';
import { requiredParam } from '@/utils/validation';

export const state = {
  venues: null,
};

export const getters = {};

export const actions = {
  async fetchVenues({ commit }) {
    const { data } = await getVenues();
    commit('SET_VENUES', {
      key: 'venues',
      newValue: data,
    });
  },
};

export const mutations = {
  // eslint-disable-next-line no-shadow
  SET_VENUES(state, { key = requiredParam('key'), newValue = requiredParam('newValue') } = {}) {
    state[key] = newValue;
  },
};
