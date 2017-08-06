<template>
  <div>
    <transition name="fade">
      <div v-if="received" class="article-view">
        <h2 class="article-view-title">{{articleTitle}}</h2>
        <p class="article-view-meta">
          Created {{articleTime}}
        </p>
        <vue-markdown class="article-view-content" :source="articleContent"></vue-markdown>
        <div class="article-view-return">
          <router-link to="/">
            Back
          </router-link>
        </div>
      </div>
      <loading v-else></loading>
    </transition>
  </div>
</template>
<script>
import API from '../api';
import VueMarkdown from 'vue-markdown';
import moment from 'moment';
import loading from './loading.vue';
export default {
  name: 'article',
  components: {
    VueMarkdown,
    loading
  },
  data() {
    return {
      articleTitle: 'N/A',
      articleTime: 'N/A',
      articleContent: 'N/A',
      received: false
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
      this.received = false;
      API.getArticle(id)
        .then(response => {
          let data = response.data;
          this.articleTitle = data.title;
          this.articleTime = moment(data.created_at, moment.ISO_8601).format('MMM DD, YYYY');
          this.articleContent = data.body;
          this.received = true;
        })
        .catch(error => {
          this.articleTitle = 'Oh, there is a error';
          this.articleTime = 'N/A';
          this.articleContent = 'N/A';
          this.received = true;
        });
    }
  }
}
</script>

<style>
.article-view {
  width: 80%;
  max-width: 660px;
  margin: auto;
  position: relative;
  text-align: left;
  padding: 1rem;
}

.article-view-title {
  font-size: 2rem;
  margin: 0;
  padding: 0;
}

.article-view-return {
  position: relative;
  float: right;
}

.article-view-meta {
  margin: 0;
  padding: 0;
  color: #A9B6C5;
}

.article-view-content {}

@media (max-width: 500px) {
  article-view {
    padding: 0.5rem;
    width: 90%;
  }
}
</style>
