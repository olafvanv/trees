<template>
  <div>
    <ul>
      <li v-bind:key="park" v-for="park in parks" v-on:click="getParks">{{park}}</li>
    </ul>
  </div>
</template>


<script lang="ts">
export default {
  name: "ParkList",
  data: () => {
    return {
      parks: ["1", "2", "1"]
    };
  },
  methods: {
    getParks: function() {}
  },
  mounted: function() {
    this.getParks();
  }
};
</script>
