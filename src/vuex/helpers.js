import { mapState, mapActions } from 'vuex';

// Bands helpers
export const bandsComputed = {
  ...mapState('bands', {
    bands: state => state.bands,
  }),
};

export const bandsActions = mapActions('bands', ['fetchBands']);

// Auth helpers
export const authComputed = {
  ...mapState('auth', {
    user: state => state.user,
  }),
};

export const authActions = mapActions('auth', ['logInUser']);

// Enums helpers
export const enumsComputed = {
  ...mapState('enums', {
    genres: state => state.genres,
  }),
};

export const enumsActions = mapActions('enums', ['fetchGenres']);
