<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Stats />
    <div class="menu">
      <router-link to="/donation" tag="button">Donation</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Stats from './components/Stats.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'app',
  components: {
    Stats
  }
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
</style>
