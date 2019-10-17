import { postProposal } from '@/api/proposals';

export const state = {
  proposals: [],
};

export const getters = {};

export const actions = {
  async addProposal({ commit }, { band, venue }) {
    const { data } = await postProposal({ band, venue });
    console.log(data);
  },
};

export const mutations = {};
