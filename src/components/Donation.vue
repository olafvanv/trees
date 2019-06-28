<template>
  <div id="donation">
    <p>Hi {{user.name}}! Good to hear you want to better the world by donating trees to compensate the <b>{{getPollutionInKg}}kg</b> of CO2 pollution you created.</p>
    
    <div class="form">
    <form class="donate-form" v-on:submit.prevent="submitDonation(donationAmount)">
      <label for="donation-input">Amount of trees:</label>
      <b-form-input v-model="donationAmount" type="number" min="0" name="donation-input" placeholder="Enter the amount of trees"></b-form-input>
      <b-button type="submit">Donate</b-button>
    </form>
    </div>

    <div class="trees" v-if="donationAmount && parseInt(donationAmount) > 0">
      <h3>Trees:</h3>
      <div class="tree-icons" >
        <span v-for="index in parseInt(donationAmount)" v-bind:key="index">
          <img class="tree-icon" src="../assets/tree.svg">
        </span>
      </div>
    </div>
  </div>
</template>

<script>

import { store } from '../store';

export default {
  name: "Donation",
  data: () => {
    return {
      donationAmount: '0',
      user: null
    }
  },
  methods: {
    submitDonation: function(amount) {
      alert(`Thank you for donating!`);
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
  },
  watch: {
    donationAmount: function() {
    }
  }
}
</script>

<style lang="scss" scoped>
#donation{
  background-color:#15596B;
  color:#fff;
  p{
    padding:0 15px;
  }
  .form{
    padding:30px 0;
    form{
      max-width:95%;
      margin:0 auto;
      input{
        margin:10px 0;
      }
      button{
        width:100%;
      }
    }
  }
}
.trees{
  background-color:#00c37b;
  width:100%;
  margin:0;
  padding:30px 10px;
  box-sizing: border-box;
   img.tree-icon{
     width:20%;
     max-width:80px;
     height:auto;
     margin:10px;
   }
}
</style>