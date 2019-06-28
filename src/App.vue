<template>
  <div id="app">
    <div class="menu">
      <router-link to="/donation" tag="button">Donation</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Park from './components/Park.vue';
import ParkList from './components/ParkList.vue';

export default {
  name: 'app',
  components: {
    Park,
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
