import axios from 'axios';
import config from './config';

const getArticleList = function() {
  return axios.get(
    `https://api.github.com/repos/${config.username}/blog/issues?creator=${config.username}&sort=created`
  );
};

const getArticle = function(id) {
  return axios.get(
    `https://api.github.com/repos/${config.username}/blog/issues/${id}`
  );
};

const getLabels = function() {
  return axios.get(
    `https://api.github.com/repos/${config.username}/blog/labels`
  );
};

export default {
  getArticleList,
  getArticle,
  getLabels
};
