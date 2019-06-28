<template>
  <div id="app">
    <park-list></park-list>
    <div class="menu">
      <router-link to="/donation" tag="button">Donation</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import ParkList from './components/ParkList.vue'

export default {
  name: 'app',
  components: {
    ParkList
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
