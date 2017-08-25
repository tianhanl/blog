<template>
  <div id="app">
    <header>
      <h1 class="blog-title">
        <router-link :to="{name: 'list'}">{{blogTitle}}
        </router-link>
      </h1>
      <nav>
        <a :href="profileAddress" target="_blank">
          <i class="fa fa-github" aria-hidden="true"></i>
        </a>
      </nav>
    </header>

    <transition name="fade" mode="out-in" appear>

      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import config from './config';
export default {
  name: 'app',
  data() {
    return {
      blogTitle: config.blogTitle,
      username: config.username
    }
  },
  computed: {
    profileAddress() {
      return `https://github.com/${this.username}`
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #515151;

  margin-top: 60px;
}
















/*Transition  */

.fade-enter-active,
.fade-leave-active {
  transition: all .2s ease-in;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
















/*General  */

h1,
h2 {
  font-weight: bold;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #F05967;
  text-decoration: none;
  transition: all 0.1s;
}

a:hover {
  color: #F07883;
}

nav>a {
  color: #D1D1D1;
  font-size: 1.5rem;
  padding: 0;
}

nav>a:hover {
  color: #A9B6C5;
}

.blog-title {
  font-size: 2.5rem;
  margin: 0.1em;
  font-weight: 100;
}

.blog-title a {
  color: #515151;
}

@media (max-width: 500px) {
  .blog-title {
    margin-top: -1rem;
    font-size: 2.5rem;
  }

  nav>a {
    font-size: 1.5rem;
  }

  ul {
    margin: 0;
  }
}
</style>
