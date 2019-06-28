<template>
    <div>
      <p>{{ user.name }}</p>
        
      <div class="progress">
        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 33%"></div>
      </div>

      polution {{ totalPollution }} 
      % {{ pollutionPercentage }}
      aantal bomen {{ user.plantedTrees }}
      
      {{ treesNeeded }}
    </div>
</template>
<script>
import { store } from '../store';
export default {
  name: "Stats",
  computed: {
    totalPollution () {
      return store.getters.flightPollution + store.getters.mobilityPollution;
    },
    treesNeeded () {
      return (store.getters.flightPollution + store.getters.mobilityPollution) / 5800;
    },
    user () {
      return store.getters.user;
    }
  }
}
</script>
<style>
</style>