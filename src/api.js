import axios from 'axios';
import config from './config';

const getArticleList = function() {
  return axios.get(
    `https://api.github.com/repos/${config.username}/blog/issues?creator=${config.username}`
  );
};

const getArticle = function(id) {
  return axios.get(
    `https://api.github.com/repos/${config.username}/blog/issues/${id}`
  );
};

export default {
  getArticleList,
  getArticle
};
