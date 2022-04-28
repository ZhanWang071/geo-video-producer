import Vue from 'vue';
import Vuex from 'vuex';
import test from './module/test';
import map from './module/map';
import heatmap from './module/heatmap';

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    test,
    map,
    heatmap,
  },
  // strict: debug,
  strict: false,
})
