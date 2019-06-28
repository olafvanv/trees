import Router from 'vue-router';
<template>
  <div>
    <span v-for="(value, name) in park.facilities"
        v-bind:key="name" v-if="value">{{name}} </span>
    <img src="../assets/park.png" alt>
  </div>
</template>


<script>
import { store } from "../store";
export default {
  name: "Park",
  data: () => {
    return {};
  },
  methods: {},
  computed: {
    index() {
      return this.$route.params.id;
    },
    park() {
      console.log(store.getters.park(this.index).facilities);
      
      return store.getters.park(this.index);
    }
  }
};
</script>

<style scoped>
</style>