import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';
// import actions from './actions.js';

Vue.use(Vuex);

const state = {
  accessTime: '',
  articleList: [],
  articles: []
};

export default new Vuex.Store({
  state,
  mutations
  // actions
});
