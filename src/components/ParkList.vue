<template>
  <div>
    <ul>
      <li v-on:click="goTo(index)" v-for="(park, index) in parks" :key="`park-${index}`">
        {{park.name}}
      </li>
    </ul>
  </div>
</template>


<script lang="ts">
import { store } from "../store";
export default {
  name: "ParkList",
  data: () => {
    return {
    };
  },
  methods: {
    goTo(index) {
      console.log(index);
    }
  },
  computed: {
    parks() {
      return store.getters.parks;
    }
  }
};
</script>
