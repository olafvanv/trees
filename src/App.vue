<template>
  <div id="app">
    <div class="menu">
      <router-link to="/donation" tag="button">Donation</router-link>
      <router-link to="/stats" tag="button">Stats</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background-color:#15596B;
  padding:0;
  box-sizing:border-box;
}
</style>
