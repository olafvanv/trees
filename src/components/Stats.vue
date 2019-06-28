<template>
  <div>
    <span v-if="loading">Loading…</span>
    <b-container class="text-center" v-else>
      <h2>Stats</h2>
      <p>{{ user.name }}</p>
      <b-row>
        <b-col>
          <b-card
            :title="mobilityDistance + ' km'"
            img-src="../assets/car.png"
            img-alt="Car"
            img-top
            tag="article"
          >
            <b-card-text>Pollution: {{ mobilityPollution }} kg</b-card-text>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            :title="flightDistance + ' km'"
            img-src="../assets/plane.png"
            img-alt="Airplane"
            img-top
            tag="article"
          >
            <b-card-text>Pollution: {{ flightPollution }} kg</b-card-text>
          </b-card>
        </b-col>
      </b-row>
      <b-row class="mt-4">
        <b-col>
          <h3>Trees needed</h3>
          <b-progress class="mt-2" :max="7" show-value>
            <b-progress-bar :value="plantedTrees" variant="success"></b-progress-bar>
          </b-progress>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { store } from "../store";
export default {
  name: "Stats",
  data() {
    return {
      loading: false,
      mobilityPollution: "",
      mobilityDistance: "",
      flightDistance: "",
      flightPollution: "",
      plantedTrees: "",
      treesNeeded: ""
    };
  },
  methods: {
    init: function() {
      this.getMobilityPollution();
      this.getMobilityDistance();
      this.getFlightPollution();
      this.getFlightDistance();
      this.getPlantedTrees();
    },
    getMobilityPollution: function() {
      this.mobilityPollution = store.getters.mobilityPollution / 1000;
    },
    getMobilityDistance: function() {
      this.mobilityDistance = store.getters.mobilityDistance / 1000;
    },
    getFlightPollution: function() {
      this.flightPollution = store.getters.flightPollution / 1000;
    },
    getFlightDistance: function() {
      this.flightDistance = store.getters.flightDistance / 1000;
    },
    getPlantedTrees: function() {
      this.plantedTrees = store.getters.plantedTrees;
    }
  },
  computed: {
    user() {
      return store.getters.user;
    }
  },
  created() {
    this.init();
    this.loading = true;
    store.dispatch("fetchUser").then(() => {
      this.loading = false;
    });
  }
}
</script>
<style>
.card-img-top {
  width: 140px;
  margin: 20px auto 0;
}
.progress {
  width: 100%;
  height: 50px;
}
.card {
  color: #000;
}
</style>