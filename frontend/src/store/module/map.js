const state = () => ({
  accessToken: "pk.eyJ1Ijoid3o5ODY5NzA0MDYiLCJhIjoiY2wxbnN5cnc0MDB0ajNjcDkxYmdubGRvZiJ9.EpGZDuJfhf-knwGjkOzV1Q",
  mapStyle: 'mapbox://styles/mapbox/dark-v10',  
  
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
  updateMapStyle(state, style){
    state.mapStyle = style;
    state.map.setStyle(state.mapStyle);
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
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}