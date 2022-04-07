const state = () => ({
  viewStates: [],
  lastViewState: [],
})

const getters = {}

const actions = {}

const mutations = {
  addViewState(state, viewState) {
    state.viewStates.push(viewState);
  },
  changeLastViewState(state, viewState) {
    state.lastViewState = viewState;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}