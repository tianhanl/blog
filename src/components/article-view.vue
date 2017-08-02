<template>
  <div class="article-view">
    <div class="article-view-return">
      <router-link to="/">
        Back
      </router-link>
    </div>
    <h2 class="article-view-title">{{articleTitle}}</h2>
    <p class="article-view-meta">
      Created {{articleTime}}
    </p>
    <vue-markdown class="article-view-content" :source="articleContent"></vue-markdown>
  </div>
</template>
<script>
import API from '../api';
import VueMarkdown from 'vue-markdown';
import moment from 'moment';
export default {
  name: 'article',
  components: {
    VueMarkdown
  },
  data() {
    return {
      articleTitle: 'N/A',
      articleTime: 'N/A',
      articleContent: 'N/A'
    }
  },
  created: function () {
    this.requestArticle(this.$route.params.id);
  },
  watch: {
    '$route'(to, from) {
      this.requestArticle(this.$route.params.id);
    }
  },
  methods: {
    requestArticle: function (id) {
      API.getArticle(id)
        .then(response => {
          let data = response.data;
          this.articleTitle = data.title;
          this.articleTime = moment(data.created_at, 'MM-DD-YYYY');
          this.articleContent = data.body;
        })
        .catch(error => {
          this.articleTitle = 'Oh, there is a error';
          this.articleTime = 'N/A';
          this.articleContent = 'N/A';
        });
    }
  }
}
</script>

<style>
.article-view {
  width: 80%;
  margin: auto;
}

.article-view-title {
  font-size: 2rem;
}

.article-view-content {
  text-align: left;
}
</style>
