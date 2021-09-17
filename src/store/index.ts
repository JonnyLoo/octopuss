import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    error: null,
    metadataHash: ''
  },
  mutations: {
    setError(state, error) {
      state.error = error;
    },
    setMetadataHash(state, hash) {
      state.metadataHash = hash;
    }
  },
  actions: {
    generateImage() {
      console.log('generate image')
    }
  },
  modules: {
  }
})
