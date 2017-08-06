<template>
  <div id="app">
    <header>
      <h1 class="blog-title">
        <router-link :to="{name: 'list'}">TL's Blog
        </router-link>
      </h1>
      <nav>
        <a href="https://github.com/tianhanl" target="_blank">
          <i class="fa fa-github" aria-hidden="true"></i>
        </a>
      </nav>
    </header>
    <router-view></router-view>
  
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
















/*Transition  */

.fade-enter-active {
  transition: all .5s ease-in;
}

.fade-enter {
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
  color: #42b983;
  text-decoration: none;
  transition: all 0.1s;
}

a:hover {
  color: #2C7A57;
}

nav>a {
  color: #A9B6C5;
  font-size: 2rem;
  padding: 0;
}

nav>a:hover {
  color: #A9B6C5;
}

.blog-title {
  font-size: 6rem;
  margin: 0.1em;
  margin-top: -2rem;
  font-weight: 100;
}

.blog-title a {
  color: #2C3E50;
}

@media (max-width: 500px) {
  .blog-title {
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
