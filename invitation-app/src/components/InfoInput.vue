<template>
  <div>
    <vs-row vs-w="12">
      <!-- firstname input -->
      <vs-col vs-lg="4" vs-sm="2" vs-xs="1"></vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="4" vs-sm="8" vs-xs="10">
        <vs-input
          class="inputClass"
          size="large"
          type="text"
          label="First Name"
          v-model="firstName"
          @change="inputGuestData"
        />
      </vs-col>
      <vs-col vs-lg="4" vs-sm="2" vs-xs="1"></vs-col>
      <!-- lastname input -->
      <vs-col vs-lg="4" vs-sm="2" vs-xs="1"></vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="4" vs-sm="8" vs-xs="10">
        <vs-input size="large" type="text" label="Last Name" v-model="lastName" @change="inputGuestData"/>
      </vs-col>
      <vs-col vs-lg="4" vs-sm="2" vs-xs="1"></vs-col>
      <!-- company -->
      <vs-col vs-lg="4" vs-sm="2" vs-xs="1"></vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="4" vs-sm="8" vs-xs="10">
        <vs-input size="large" type="text" label="Comapny" v-model="company" @change="inputGuestData"/>
      </vs-col>
      <vs-col vs-lg="4" vs-sm="2" vs-xs="1"></vs-col>
      <!-- purpose of visit -->
      <vs-col vs-lg="4" vs-sm="2" vs-xs="1"></vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="4" vs-sm="8" vs-xs="10">
        <vs-select class="purposeSelect" label="Purpose of Visit" v-model="visitPurpose" @change="inputGuestData" :placeholder="visitPurpose">
          <vs-select-item
            :key="index"
            :value="item.value"
            :text="item.text"
            v-for="(item, index) in purposeOptions"
          />
        </vs-select>
      </vs-col>
      <vs-col vs-lg="4" vs-sm="2" vs-xs="1"></vs-col>
    </vs-row>
    <!-- permission to send email -->
    <vs-row class="my-2" vs-w="12">
      <vs-col vs-lg="4" vs-sm="3" vs-xs="1"></vs-col>
      <vs-col class="px-1" vs-type="flex" vs-justify="center" vs-align="center" vs-lg="4" vs-sm="6" vs-xs="10">
        <vs-checkbox
          v-model="emailEnabled"
          @change="inputGuestData"
        >I agree to receive the email from Roche about the events and activities update.</vs-checkbox>
      </vs-col>
      <vs-col vs-lg="4" vs-sm="3" vs-xs="1"></vs-col>
      <!-- agreement to privacy policy -->
      <vs-col vs-lg="4" vs-sm="3" vs-xs="1"></vs-col>
      <vs-col class="px-1 my-1" vs-type="flex" vs-justify="center" vs-align="center" vs-lg="4" vs-sm="6" vs-xs="10">
        <vs-checkbox id="privacyAgreement" v-model="privacyAgreed" @change="checkAgreement(); inputGuestData();">
          I agree to be bound by, the terms & conditions including the Privacy Policy (together, the "Terms").
        </vs-checkbox>
      </vs-col>
      <vs-col vs-lg="4" vs-sm="3" vs-xs="1"></vs-col>
      <vs-col vs-lg="4" vs-sm="2" vs-xs="1"></vs-col>
    <vs-col class="terms" vs-type="flex" vs-justify="center" vs-align="center" vs-lg="4" vs-sm="8" vs-xs="10">
      <p>* Read <a href="/terms" target="_blank">Terms & Condition</a></p>
      </vs-col>
      <vs-col vs-lg="4" vs-sm="2" vs-xs="1"></vs-col>
    </vs-row>
    <!-- button click to next -->
    <vs-row class="buttonSession" vs-w="12">
      <vs-col vs-lg="4" vs-sm="2" vs-xs="1"></vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="4" vs-sm="8" vs-xs="10">
        <router-link :class="{ disabled: isDisabled }" to="/pic">
        <vs-row>
        <vs-button class="btnNext" color="primary" type="filled" :disabled="isDisabled">
          Next
        </vs-button>
        </vs-row>
        </router-link>
      </vs-col>
      <vs-col vs-lg="4" vs-sm="2" vs-xs="1"></vs-col>
    </vs-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "InfoInput",
  components: {},
  data() {
    return {
      firstName: "",
      lastName: "",
      company: "",
      visitPurpose: "others",
      purposeOptions: [
        { text: "Meeting", value: "meeting" },
        { text: "Event", value: "event" },
        { text: "Others", value: "others" }
      ],
      emailEnabled: false,
      privacyAgreed: false,
      isDisabled: true
    };
  },
  methods: {
    ...mapActions(["saveGuestData"]),
    inputGuestData() {
      const data = {};
      data["first_name"] = this.firstName;
      data["last_name"] = this.lastName;
      data["company"] = this.company;
      data["purpose_of_visit"] = this.visitPurpose;
      data["email_permission"] = this.emailEnabled;
      data["privacy_agreement"] = this.privacyAgreed;
      this.$emit('switch-privacy', this.privacyAgreed);
      this.saveGuestData(data);
      console.log('inputting...')
    },
    checkAgreement() {
      if (this.privacyAgreed !== false) {
        this.isDisabled = false;
      } else {
        this.isDisabled = true;
      }
    }
  },
  computed: mapGetters(["allInfo"]),
  created(){
    this.firstName = this.allInfo.first_name;
    this.lastName = this.allInfo.last_name;
    this.company = this.allInfo.company;
    this.visitPurpose = this.allInfo.purpose_of_visit;
    this.emailEnabled = this.allInfo.email_permission;
    this.privacyAgreed = this.allInfo.privacy_agreement;
    this.isDisabled = !this.allInfo.privacy_agreement;
  }
};
</script>

<style scoped>
.vs-input {
  margin: 10px;
  text-align: left;
  width: 100%;
  font-size: 1rem;
}

.purposeSelect {
  margin: 10px;
  width: 100%;
  text-align: left;
  font-size: 1rem;
  color: #000000;
}

.px-1 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.my-1 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.my-2 {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.btnNext {
  margin: 10px;
  text-align: center;
  width: 100%;
  font-size: 1.1rem;
}

a {
  width: 100%;
  color: #ffffff;
}

.terms a{
  width: unset;
  color: #1cb7ff;
  z-index: 10;
}

.terms p{
  font-size: .7rem;
  text-align: left
}

.disabled {
    pointer-events:none; 
    opacity:0.6;        
 }

</style>