import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';
// import actions from './actions.js';

Vue.use(Vuex);

const state = {
  accessTime: '',
  articleList: [],
  articles: [],
  labels: [],
  currPosition: -1
};

const getters = {
  previousArticleID: state => {
    if (state.currPosition === -1) return -1;
    if (state.articleList.length && state.currPosition - 1 >= 0) {
      return state.articleList[state.currPosition - 1].number;
    } else {
      return -1;
    }
  },
  nextArticleID: state => {
    if (state.currPosition === -1) return -1;
    if (
      state.articleList.length &&
      state.currPosition + 1 < state.articleList.length
    ) {
      return state.articleList[state.currPosition + 1].number;
    } else {
      return -1;
    }
  }
};

export default new Vuex.Store({
  state,
  getters,
  mutations
  // actions
});
