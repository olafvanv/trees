<template>
  <div>
    <span
      class="facilities"
      v-for="(value, name) in park.facilities"
      v-bind:key="name"
      v-if="value"
    >
      <!-- <img :src="getImg(name)" alt> -->
      <img v-if="name==='toilet'" src="../assets/toilet.png" alt>
      <img v-if="name==='restaurant'" src="../assets/restaurant.jpg" alt>
      <img v-if="name==='fountain'" src="../assets/fountain.png" alt>
      <img v-if="name==='playground'" src="../assets/playground.jpg" alt>
    </span>
    <div>
      <img src="../assets/park.png" alt>
    </div>
  </div>
</template>


<script>
import { store } from "../store";
export default {
  name: "Park",
  data: () => {
    return {};
  },
  methods: {
    getImg(name) {
      return "../assets/" + name + ".png";
    }
  },
  computed: {
    index() {
      return this.$route.params.id;
    },
    park() {
      return store.getters.park(this.index);
    }
  }
};
</script>

<style lang="scss" scoped>
.facilities {
  margin-right: 10px;
  img {
    width: 50px;
    height: 50px;
  }
}
</style>