import { getBands, getBand } from '@/api/bands';
import { requiredParam } from '@/utils/validation';

export const state = {
  bands: [],
  band: null,
  bandIsLoading: true,
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
  async fetchBand({ commit }, { slug } = {}) {
    const { data } = await getBand({ slug });
    commit('SET_BANDS', { key: 'band', newValue: data });
    commit('SET_BANDS', { key: 'bandIsLoading', newValue: false });
  },
};

export const mutations = {
  // eslint-disable-next-line no-shadow
  SET_BANDS(state, { key = requiredParam('key'), newValue = requiredParam('newValue') } = {}) {
    state[key] = newValue;
  },
};
