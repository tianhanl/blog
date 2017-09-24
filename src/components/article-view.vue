<template>
  <div>
    <transition name="fade" mode="out-in">
      <div v-if="received" class="article-view">
        <h2 class="article-view-title">{{articleTitle}}</h2>
        <p class="article-view-meta">
          Created {{articleTime}}
        </p>
        <vue-markdown @rendered="highlight" class="article-view-content" :source="articleContent"></vue-markdown>
        <nav class="article-view-control">
          <router-link id="prev" :class="{disabled: previousDisable}" :to="{name: 'article', params:{id:targetPreviousID}}">Prev</router-link>
          <router-link id="next" :class="{disabled: nextDisable}" :to="{name: 'article', params:{id:targetNextID}}">Next </router-link>
        </nav>
      </div>
      <loading v-if="!received"></loading>
    </transition>
  </div>
</template>
<script>
import API from '../api';
import VueMarkdown from 'vue-markdown';
import moment from 'moment';
import loading from './loading.vue';
import 'prismjs';
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
  computed: {
    articleList() {
      return this.$store.state.articleList;
    },
    articles() {
      return this.$store.state.articles;
    },
    previousID() {
      return this.$store.getters.previousArticleID;
    },
    nextID() {
      return this.$store.getters.nextArticleID;
    },
    previousDisable() {
      return this.$store.getters.previousArticleID < 0;
    },
    nextDisable() {
      return this.$store.getters.nextArticleID < 0;
    },
    targetPreviousID() {
      return this.previousID < 0 ? this.$route.params.id : this.previousID;
    },
    targetNextID() {
      return this.nextID < 0 ? this.$route.params.id : this.nextID;
    }
  },
  created: function() {
    this.requestArticle(this.$route.params.id);
  },
  mounted: function() {
    this.highlight();
  },
  updated: function() {
    this.highlight();
  },
  watch: {
    '$route'(to, from) {
      this.requestArticle(this.$route.params.id);
    }
  },
  methods: {
    highlight: function() {
      Prism.highlightAll();
    },
    requestArticle: function(id) {
      if (this.articles.find(element => element.number === id)) {
        let data = this.articles.find(element => element.number === id);
        this.articleTitle = data.title;
        this.articleTime = moment(data.created_at, moment.ISO_8601).format('MMM DD, YYYY');
        this.articleContent = data.body;
        this.received = true;
      } else {
        this.received = false;
        API.getArticle(id)
          .then(response => {
            let data = response.data;
            this.articleTitle = data.title;
            this.articleTime = moment(data.created_at, moment.ISO_8601).format('MMM DD, YYYY');
            this.articleContent = data.body;
            this.received = true;
            this.$store.commit('addArticle', {
              articleData: data
            })
          })
          .catch(error => {
            this.articleTitle = 'Oh, there is a error';
            this.articleTime = 'N/A';
            this.articleContent = 'N/A';
            this.received = true;
          });
      }
      let position = this.articleList.findIndex(element => element.number === id);
      this.$store.commit('changeCurrPosition', {
        currPosition: position
      })
    }
  }
}
</script>

<style>
@import '../../node_modules/prismjs/themes/prism.css';

pre {
  overflow-x: auto;
}

.article-view {
  width: 80%;
  max-width: 740px;
  margin: auto;
  position: relative;
  padding: 0 1rem 1rem;
  text-align: left;
}

.article-view-title {
  font-size: 2rem;
  margin: 0.5rem 0;
}

.article-view-control {
  position: relative;
}

.article-view-control>a {
  font-size: 1.25rem;
  color: #F05967;
}

.article-view-control>a:hover {
  color: #F07883;
}

.article-view-control a.disabled {
  color: #9F9F9F;
}

.article-view-control a.disabled:hover {
  color: #9F9F9F;
}

#prev {
  position: fixed;
  left: 5%;
  bottom: 5%;
}

#next {
  position: fixed;
  right: 5%;
  bottom: 5%;
}

.article-view-meta {
  margin: 0;
  padding: 0;
  color: #A9B6C5;
}

.article-view-content {
  overflow: hidden;
}

@media (max-width: 840px) {
  .article-view-control {
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
  }
  #prev {
    position: static;
  }

  #next {
    position: static;
  }
}

@media (max-width: 500px) {
  article-view {
    padding: 0.5rem;
    width: 90%;
  }
  .article-view-title {
    font-size: 1.75rem;
  }

  .article-view-title {
    margin: 0.3rem 0;
  }
}
</style>
