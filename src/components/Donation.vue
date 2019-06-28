<template>
  <div id="donation">
    <h2 class="page-title">{{title}}</h2>
    <p>Hi {{user.name}}! Good to hear you want to better the world by donating trees to compensate the <b>{{getPollutionInKg}}kg</b> of CO2 pollution you created.</p>
    <form class="donate-form" v-on:submit.prevent="submitDonation(donationAmount)">
      <label for="donation-input">Amount of trees:</label>
      <input type="number" name="donation-input" class="donation-input" v-model="donationAmount">
      <b-button type="submit">Donate</b-button>
    </form>
  </div>
</template>

<script>

import { store } from '../store';

export default {
  name: "Donation",
  data: () => {
    return {
      title: 'Donation',
      donationAmount: '3',
      user: null
    }
  },
  methods: {
    submitDonation: function(amount) {
      alert(`Thank you for donating!`);
      console.log(amount);
    },
    getUser: function() {
      this.user = store.getters.user
    }
  },
  created: function() {
    this.getUser();
  },
  computed: {
    getPollutionInKg: function() {
      return this.user.mobilityConcept.pollution / 1000;
    }
  }
}
</script>