<template>
  <div id="app">
    <div class="menu">
      <router-link to="/donation" tag="a">Donation</router-link>
      <router-link to="/stats" tag="a">Stats</router-link>
    </div>
    <ParkList/>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import ParkList from "@/components/ParkList";

export default {
  name: "app",
  components: {
    ParkList
  }
};
</script>

<style lang="scss">
html,body{
  min-height:100%;
  width:100%;
  background-color: #15596b;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background-color: #15596b;
  padding: 0;
  box-sizing: border-box;
  min-height:100%;
  .menu {
    padding:20px 0;
    display:flex;
    align-items: center;
    justify-content:center;
    a{
      display:block;
      margin:0 5px;
      color:#fff;
      &.router-link-active{
        text-decoration: underline;
      }
    }
  }
}
</style>
