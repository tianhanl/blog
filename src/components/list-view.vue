<template>
  <div class="list-view">
    <transition-group name="slide-down" tag="ul" class="list-view-label-container">
      <li class="list-view-label-item" v-bind:style="{'background-color': '#'+label.color}" v-for="label in labels" :key="label.name">
        <span>{{label.name}}</span>
      </li>

    </transition-group>
    <transition-group tag="ul" name="slide">
      <li class="list-view-item" v-for="article in articleList" :key="article.id">
        <P class="list-view-item-time">{{article.articleTime}}</P>
        <h3>
          <router-link :to="{name: 'article', params:{id:article.number}}">{{article.title}}</router-link>
        </h3>
      </li>
    </transition-group>
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
    }
  },
  computed: {
    articleList() {
      return this.$store.state.articleList;
    },
    accessTime() {
      return this.$store.state.accessTime;
    },
    labels() {
      return this.$store.state.labels;
    }
  },
  created() {

    this.getArticles();
    this.getLabels();
  },
  methods: {
    getLabels() {
      API.getLabels()
        .then(response => {
          let labelList = response.data.map(element => {
            return {
              name: element.name,
              color: element.color
            }
          })
          this.$store.commit('addLabels', {
            labels: labelList
          })
        })
        .catch(error => {
          console.log(error);
          return;
        });
    },
    getArticles() {
      if (this.accessTime) {
        return;
      }
      let today = new Date().getDate();
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
          this.$store.commit('addArticleList', {
            accessTime: today,
            articleList: list
          })
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
.slide-down-enter-active,
.slide-down-leave-active {

  transition: all 0.5s ease-in;
}

.slide-down-enter,
.slide-down-leave-to {

  opacity: 0;
  transform: translateY(-30px);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 1s ease-in-out;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-view {
  position: relative;
  width: 80%;
  max-width: 600px;
  margin: auto;
}

.list-view-label-container {
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.list-view-label-item {
  color: HSLA(0, 0%, 32%, 1.00);
  padding: 0.25rem 0.5rem;
  border-radius: 10%;
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
  .list-view-item-time {
    margin-bottom: 0.2rem;
  }

  .list-view-item h3 {
    margin-top: 0;
  }
}
</style>

