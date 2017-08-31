const mutations = {
  addArticleList(state, payload) {
    state.accessTime = payload.accessTime;
    state.articleList = payload.articleList;
  },
  addArticle(state, payload) {
    state.articles.push(payload.articleData);
  },
  changeCurrPosition(state, payload) {
    state.currPosition = payload.currPosition;
  }
};

export default mutations;
