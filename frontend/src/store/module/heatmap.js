const state = () => ({
    intensity: 0,
    radius: 0,
    threshold: 0,
  })
  
  const getters = {}
  
  const actions = {}
  
  const mutations = {
    changeIntensity(state, value) {
      state.intensity = value;
    },
    changeRadius(state, value) {
      state.radius = value;
    },
    changeThreshold(state, value) {
      state.threshold = value;
    },
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }