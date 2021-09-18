import { createStore } from 'vuex'
import axios from 'axios';

const apiUrl = 'https://octopuss-api.herokuapp.com/octopuss'

export default createStore({
  state: {
    error: null,
    image: ''
  },
  mutations: {
    setError: (state, error) => {
      state.error = error;
    },
    setImage: (state, image) => {
      state.image = image;
    }
  },
  actions: {
    generateImage: async ({ commit }) => {
      console.log('generate image');

      try {
        const result = await axios.post(`${apiUrl}/gimmie`);
        const image = 'data:image/png;base64,'.concat(result.data);
        commit('setImage', image);
      } catch (err) {
        commit('setError', err);
      }
    }
  },
  getters: {
    image: state => state.image
  },
  modules: {
  }
})
