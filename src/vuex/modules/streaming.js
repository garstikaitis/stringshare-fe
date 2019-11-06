import requiredParam from '@/utils/validation/required-param';
import { getSong } from '../../api/streaming';

export const state = {
  song: null,
  songLoaded: false,
};

export const getters = {};

export const actions = {
  async fetchSong({ commit }) {
    const { data } = await getSong();
    commit('SET_STREAMING', {
      key: 'song',
      newValue: window.URL.createObjectURL(new Blob([data], { type: 'audio/mp3' })),
    });
    console.log(data.data);
    commit('SET_STREAMING', {
      key: 'songLoaded',
      newValue: true,
    });
  },
};

export const mutations = {
  // eslint-disable-next-line no-shadow
  SET_STREAMING(state, { key = requiredParam('key'), newValue = requiredParam('newValue') } = {}) {
    state[key] = newValue;
  },
};
