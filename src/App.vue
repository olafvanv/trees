<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div class="menu">
      <router-link to="/home" tag="button">Home</router-link>
      <router-link to="/donation" tag="button">Donation</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Park from './components/Park.vue';
import ParkList from './components/ParkList.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
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
