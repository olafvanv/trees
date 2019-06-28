<template>
    <div>
        <p>{{ user.name }}</p>
    </div>
</template>
<script>
import { store } from '../store';
export default {
  name: "Stats",
  computed: {
      user () {
        return store.getters.user;
      }
  }
};
</script>
<style>
</style>