import requiredParam from '@/utils/validation/required-param';
import { getGenres } from '../../api/enums';

export const state = {
  genres: [],
};

export const getters = {};

export const actions = {
  async fetchGenres({ commit }) {
    const { data } = await getGenres();
    commit('SET_ENUMS', {
      key: 'genres',
      newValue: data,
    });
  },
};

export const mutations = {
  // eslint-disable-next-line no-shadow
  SET_ENUMS(state, { key = requiredParam('key'), newValue = requiredParam('newValue') } = {}) {
    state[key] = newValue;
  },
};
