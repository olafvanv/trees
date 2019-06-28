<template>
  <div>
    <span v-if="loading">Loading…</span>
    <p v-else>{{ user.name }}</p>
  </div>
</template>
<script>
import { store } from "../store";
export default {
  name: "Stats",
  data() {
    return {
      loading: false
    };
  },
  computed: {
    user() {
      return store.getters.user;
    }
  },
  created() {
    this.loading = true;
    store.dispatch("fetchUser").then( () => {
      this.loading = false;
    });
  }
};
</script>
<style>
</style>