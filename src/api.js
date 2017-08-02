import axios from 'axios';

const getArticleList = function() {
  return axios.get(
    'https://api.github.com/repos/tianhanl/blog/issues?creator=tianhanl'
  );
};

const getArticle = function(id) {
  return axios.get(`https://api.github.com/repos/tianhanl/blog/issues/${id}`);
};

export default {
  getArticleList,
  getArticle
};
