import { mapState, mapActions } from 'vuex';

// Bands helpers
export const bandsComputed = {
  ...mapState('bands', {
    bands: state => state.bands,
    band: state => ({
      band: state.band,
      isLoading: state.bandIsLoading,
    }),
  }),
};

export const bandsActions = mapActions('bands', ['fetchBands', 'fetchBand']);

// Auth helpers
export const authComputed = {
  ...mapState('auth', {
    user: state => state.user,
  }),
};

export const authActions = mapActions('auth', ['logInUser', 'logOutUser']);

// Enums helpers
export const enumsComputed = {
  ...mapState('enums', {
    genres: state => state.genres,
  }),
};

export const enumsActions = mapActions('enums', ['fetchGenres']);

// Proposals helpers
export const proposalsActions = mapActions('proposals', ['addProposal']);

// Venues helpers
export const venuesComputed = {
  ...mapState('venues', {
    venues: state => state.venues,
  }),
};

// Venues actions
export const venuesActions = mapActions('venues', ['fetchVenues']);
