import axios from 'axios';

const getArticleList = function() {
  return axios.get(
    'api.github.com/repos/tianhanl/tianhanl.github.io/issues?creator=tianhanl'
  );
};

const getArticle = function(id) {
  return axios.get(
    `https://api.github.com/repos/tianhanl/tianhanl.github.io/issues/${id}`
  );
};
