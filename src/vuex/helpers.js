import { mapState, mapActions } from 'vuex';

// Bands helpers
export const bandsComputed = {
  ...mapState('bands', {
    bands: state => state.bands,
  }),
};

export const bandsActions = mapActions('bands', ['fetchBands']);
