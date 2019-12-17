<template>
  <div>
    <Header />
    <InfoInput v-on:switch-privacy="switchPrivacy"/>
    <Footer :privacy="privacyAgreed"/>
  </div>
</template>

<script>
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import InfoInput from "../components/InfoInput";
import { mapGetters } from "vuex";

export default {
  name: "InfoPage",
  components: {
    InfoInput,
    Header,
    Footer
  },
  data(){
    return{
      privacyAgreed: false
    }
  },
  methods: {
    switchPrivacy(isAgreed){
      this.privacyAgreed = isAgreed
    }
  },
  created(){
      this.privacyAgreed = this.allInfo.privacy_agreement
  },
  computed: mapGetters(["allInfo"])
};
</script>

<style scoped>

</style>
