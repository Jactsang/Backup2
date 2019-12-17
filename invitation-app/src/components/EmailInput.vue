
<template lang="html">
<div class="form-item">
  <vs-row vs-w="12" type="flex" vs-justify="center" vs-align="center">
    <!-- welcome image -->
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="4" vs-sm="8" vs-xs="12">
        <!-- <img alt="Welcome Image" src="../assets/welcome-image.svg" class="image"/> -->
        <img alt="Welcome Image" src="/landingpic.png" class="image"/>
    </vs-col>
  </vs-row>
    <!-- greeting -->
    <vs-row vs-w="12" type="flex" vs-justify="center" vs-align="center">
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="6" vs-sm="8" vs-xs="12">
      <p>Get the gate pass in a minute</p>
    </vs-col>
  </vs-row>
  <vs-row vs-w="12" type="flex" vs-justify="center" vs-align="center">
    <!-- email input -->
  <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="4" vs-sm="8" vs-xs="10">
    <vs-input size="large" type="email" label="Email" placeholder="Please Enter Your Email" v-model="emailAddress" @change="checkEmptyValue"/>
  </vs-col>
  </vs-row>
  <!-- confirm button -->
  <vs-row class="buttonSession" vs-w="12" vs-type="flex" vs-justify="center" vs-align="center">
  <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="4" vs-sm="8" vs-xs="10">
    <router-link :to="link">
    <vs-row>
    <vs-button color="primary" type="filled">
        Confirm
    </vs-button>
    </vs-row>
    </router-link>
  </vs-col>
  </vs-row>
</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import axios from 'axios';

export default {
  name: "EmailInput",
  data() {
    return {
      emailAddress: "",
      isDisabled: true,
      link: "/info",
      uuid: "717c81bd-258b-4db1-8bf3-4afabad2e921"
    };
  },
  methods: {
    ...mapActions(["saveEmail", "fetchInfo"]),
    checkEmptyValue() {
      if (this.emailAddress !== "") {
        this.isDisabled = false;
        this.saveEmail(this.emailAddress);
      } else {
        this.isDisabled = true;
      }
    },
    async checkDatabase(){
      
      const response = await axios.get(`https://3y3gxg8arc.execute-api.us-east-1.amazonaws.com/dev/api/user/schedules?userId=${this.uuid}`)
      console.log('response data here: ', response.data[0])
      if(response.data[0].email !== null){
        this.emailAddress = response.data[0].email;
        this.link = "/event";
      }
      console.log('mounted')
    }
  },
  computed: mapGetters(["allInfo"]),
  created() {
    this.checkEmptyValue();
    console.log('windows details', window.location)
  },
  mounted(){
    // const urlParams = new URLSearchParams(window.location.search);
    // console.log(urlParams.get('userId'));
    // this.uuid = urlParams.get('userId')
    this.checkDatabase();
  }
};
</script>

<style scoped>
.form-item {
  text-align: center;
  font-size: 1.1rem;
}

.image {
  width: 100%;
}

.vs-input {
  margin: 10px;
  text-align: left;
  width: 100%;
  font-size: 1rem;
}

.vs-button {
  margin: 10px;
  text-align: center;
  width: 100%;
  font-size: 1.1rem;
}

a {
  width: 100%;
  color: #ffffff;
}
</style>