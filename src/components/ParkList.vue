<template>
  <div>
    <ul id="example-1">
      <li v-for="park in parks">{{park}}</li>
    </ul>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  el: "#example-1",
  data: {
    parks: ["1", "2", "1"]
  }
});
</script>
