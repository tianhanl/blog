<template>
  <div class="loading">
    <vue-loading type="beat" color="#42B983" :size="{width: '50px', height:'50px'}"></vue-loading>
  </div>
</template>
<script>
import vueLoading from 'vue-loading-template'
export default {
  name: 'loading',
  components: {
    vueLoading
  }
}
</script>
<style>
.loading {
  width: 80%;
  max-width: 600px;
  height: 300px;
  position: relative;
  margin: auto;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
}
</style>

