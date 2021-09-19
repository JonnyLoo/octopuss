import { createStore } from 'vuex'
import axios from 'axios';

const apiUrl = 'https://octopuss-api.herokuapp.com/octopuss'

export default createStore({
  state: {
    loading: false,
    error: null,
    image: ''
  },
  mutations: {
    setLoading: (state, isLoading) => {
      state.loading = isLoading;
    },
    setError: (state, error) => {
      state.error = error;
    },
    setImage: (state, image) => {
      state.image = image;
    }
  },
  actions: {
    generateImage: async ({ commit }) => {
      commit('setLoading', true);

      try {
        const result = await axios.post(`${apiUrl}/gimmie`);
        const image = 'data:image/png;base64,'.concat(result.data);
        commit('setImage', image);
      } catch (err) {
        commit('setError', err);
      }

      commit('setLoading', false);
    }
  },
  getters: {
    loading: state => state.loading,
    image: state => state.image
  },
  modules: {
  }
})
