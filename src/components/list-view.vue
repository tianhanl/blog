<template>
  <div class="list-view">
    <h2>Article List</h2>
    <ul>
      <li class="list-view-item" v-for="article in articles" :key="article.id">
        <router-link :to="{name: 'article', params:{id:article.id}}">{{article.title}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'list-view',
  data() {
    return {
      articles: []
    }
  }
}
</script>

