<template>
    <div>
        <p>{{ user.name }}</p>
    </div>
</template>
<script>
import { store } from '../store';
export default {
  name: "Stats",
  data() {
    return {
        id: String,
        name: String,
        pollution: {
            mobilityConcept: {
                distance: Number,
                pollution: Number
            },
            egencia: {
              flightDistance: Number  
            }
        }
    };
  },
  computed: {
      user () {
        return store.getters.user;
      }
  }
};
</script>
<style>
</style>