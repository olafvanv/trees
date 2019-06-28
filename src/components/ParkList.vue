<template>
  <div>
    <ul>
      <li
        v-on:click="goTo(index)"
        v-for="(park, index) in parks"
        :key="`park-${index}`"
      >{{park.name}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { store } from "../store";
import Park from "./Park.vue";

export default {
  name: "ParkList",
  data: () => {
    return {};
  },
  methods: {
    goTo(index) {
      this.$router.push({ name: "park", params: { id: index } });
    }
  },
  computed: {
    parks() {
      return store.getters.parks;
    }
  }
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  li {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>