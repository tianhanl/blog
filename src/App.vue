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
      <router-view class="sticky-main"></router-view>
    </transition>
    <footer>
      Created by
      <a :href="profileAddress">TL</a>
    </footer>
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
  margin-top: 0;
  display: flex;
  flex-direction: column;
  min-height: 99vh;
  box-sizing: border-box;
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

header {
    padding: 1rem;
}

footer {
  padding: 0.5rem;
  color: #9F9F9F;
}

.sticky-main {
  flex: 1 0 80%;
}

.blog-title {
  font-size: 2.5rem;
  margin: 2rem 0 0.5rem;
  font-weight: 100;
}

.blog-title a {
  color: #515151;
}

@media (max-width: 500px) {
  .blog-title {
    font-size: 2rem;
    margin-top: 1.5rem;
      margin-bottom: 0.25rem;
  }
  nav>a {
    font-size: 1.5rem;
  }

  ul {
    margin: 0;
  }
}
</style>
