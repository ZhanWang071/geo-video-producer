const state = () => ({
  accessToken: "pk.eyJ1Ijoid3o5ODY5NzA0MDYiLCJhIjoiY2wxbnN5cnc0MDB0ajNjcDkxYmdubGRvZiJ9.EpGZDuJfhf-knwGjkOzV1Q",
  mapStyle: 'mapbox://styles/mapbox/light-v9',  
  
  map: null,
  deck: null,
  viewStates: [],
  lastViewState: [],

  removedClips: [],
})

const getters = {}

const actions = {}

const mutations = {
  initMap(state, map) {
    state.map = map;
  },
  initDeck(state, deck) {
    state.deck = deck;
  },
  initViewState(state) {
    state.viewStates = [];
    state.removedClips = [];
  },
  addViewState(state, viewState) {
    state.viewStates.push(viewState);
  },
  deleteViewState(state, index) {
    state.removedClips.push(index);
  },
  changeLastViewState(state, viewState) {
    state.lastViewState = viewState;
  },
  
//   viewStateTransition(state, viewState) {
//     state.deck.setProps({
//       initialViewState: {
//         ...viewState,
//         transitionInterpolator: new FlyToInterpolator(),
//         transitionDuration: 2000,
//       }
//     })
//   },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}