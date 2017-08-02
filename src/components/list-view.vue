<template>
  <div class="list-view">
    <h2>Article List</h2>
    <ul>
      <li class="list-view-item" v-for="article in articles" :key="article.id">
        <router-link :to="{name: 'article', params:{id:article.number}}">{{article.title}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import API from '../api';

export default {
  name: 'list-view',
  data() {
    return {
      articles: []
    }
  },
  created() {
    this.getArticles();
  },
  methods: {
    getArticles() {
      API.getArticleList()
        .then(response => {
          let list = response.data.map(element => {
            return {
              number: element.number,
              id: element.id,
              title: element.title
            }
          })
          this.articles = list;
        })
        .catch(error => {
          return;
        });
    }
  }
}
</script>

