import { getBands } from '@/api/bands';
import { requiredParam } from '@/utils/validation';

export const state = {
  bands: [],
};

export const getters = {};

export const actions = {
  async fetchBands({ commit }) {
    const { data } = await getBands();
    commit('SET_BANDS', {
      key: 'bands',
      newValue: data,
    });
  },
};

export const mutations = {
  // eslint-disable-next-line no-shadow
  SET_BANDS(state, { key = requiredParam('key'), newValue = requiredParam('newValue') } = {}) {
    state[key] = newValue;
  },
};
