<template>
  <div>
    <transition name="fade">
      <div v-if="received" class="list-view">
        <ul>
          <li class="list-view-item" v-for="article in articles" :key="article.id">
            <P class="list-view-item-time">{{article.articleTime}}</P>
            <h3>
              <router-link :to="{name: 'article', params:{id:article.number}}">{{article.title}}</router-link>
            </h3>
          </li>
        </ul>
      </div>
      <loading v-else></loading>
    </transition>
  
  </div>
</template>
<script>
import API from '../api';
import moment from 'moment';
import loading from './loading.vue';
export default {
  name: 'list-view',
  components: {
    loading
  },
  data() {
    return {
      articles: [],
      received: false
    }
  },
  created() {
    this.getArticles();
  },
  methods: {
    getArticles() {
      this.received = false;
      API.getArticleList()
        .then(response => {
          let list = response.data.map(element => {
            return {
              number: element.number,
              id: element.id,
              title: element.title,
              articleTime: moment(element.created_at).format('MMM YYYY')
            }
          })
          this.received = true;
          this.articles = list;
        })
        .catch(error => {
          console.log(error);
          return;
        });
    }
  }
}
</script>
<style>
.list-view {
  position: relative;
  width: 80%;
  max-width: 600px;
  margin: auto;
}

.list-view-item {
  border-bottom: 1px solid #A9B6C5;
  display: block;
  padding: 1rem 0 1.5rem 0;
  margin-bottom: 1em;
  text-align: left;
  display: flex;
}


.list-view-item-time {
  flex: 0 0 20%;
  color: #A9B6C5;
  margin: 0;
  padding: 0;
}

.list-view-item h3 {
  flex: 1, 1, 80%;
  font-size: 1.5em;
  margin: 0;
  margin-top: -0.25em;
  padding: 0;
}

@media (max-width: 500px) {
  .list-view-item {
    flex-direction: column;
    padding: 0.5rem 0 0.75rem 0;
  }
  .list-view-item h3 {
    margin-top: 0;
  }
}
</style>

