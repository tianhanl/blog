import Vue from 'vue';
import Router from 'vue-router';
import ListView from './components/list-view.vue';
import ArticleView from './components/article-view.vue';

// Use vue-router plugin
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'list',
      component: ListView
    },
    {
      path: '/article/:id',
      name: 'article',
      component: ArticleView
    }
  ]
});

export default router;
