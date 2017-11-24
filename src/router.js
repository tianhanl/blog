import Vue from 'vue';
import Router from 'vue-router';

import ArticleView from './components/article-view.vue';
import ListView from './components/list-view.vue';
import config from './config';

// Use vue-router plugin
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'list',
      component: ListView,
      meta: { title: config.blogTitle }
    },
    {
      path: '/article/:id',
      name: 'article',
      component: ArticleView,
      meta: { title: 'Article' }
    }
  ]
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
