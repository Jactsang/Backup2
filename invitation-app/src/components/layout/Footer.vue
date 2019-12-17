<template>
  <div class="footer">
    <vs-row class="footerPosition" vs-w="12" type="flex" vs-justify="center" vs-align="center">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-lg="1" vs-sm="2" vs-xs="2">
        <router-link to="/info">
        <i class="fas fa-clipboard-list" :class="{ active : infoActivated }"></i>
          <!-- <vs-icon icon="assignment" :color="infoIconColor"></vs-icon> -->
        </router-link>
      </vs-col>
      <vs-col vs-lg="1" vs-sm="1" vs-xs="1">
        <vs-divider />
      </vs-col>
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-lg="1" vs-sm="2" vs-xs="2">
        <router-link :class="{ iconDisabled: !privacy  }" to="/pic">
        <i class="fas fa-user-circle" :class="{ active : picActivated }"></i>
          <!-- <vs-icon icon="account_box" :color="picIconColor"></vs-icon> -->
        </router-link>
      </vs-col>
      <vs-col vs-lg="1" vs-sm="1" vs-xs="1">
        <vs-divider />
      </vs-col>
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-lg="1" vs-sm="2" vs-xs="2">
        <router-link :class="{ iconDisabled: !privacy  }" to="/event">
        <i class="far fa-check-circle" ></i>
          <!-- <vs-icon icon="check_circle_outline"></vs-icon> -->
        </router-link>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Footer",
  data() {
    return {
      infoActivated: false,
      picActivated: false,
      infoIconColor: "#000000",
      picIconColor: "#000000",
      isPicDisabled: true
    };
  },
  method: {},
  computed: mapGetters(["allInfo"]),
  props: {
    privacy: Boolean,
  },
  created() {
    console.log("current location: ", window.location);
    if (window.location.pathname === "/info") {
      this.infoIconColor = "#0078c1";
      this.infoActivated = true
    }
    if (window.location.pathname === "/pic") {
      this.picIconColor = "#0078c1";
      this.infoIconColor = "#bdbdbd";
      this.picActivated = true;
    }
    console.log('this.privacy (in created) here: ', this.privacy)
    if(this.allInfo.privacy_agreement || this.privacy){
      this.privacy = true;
      this.isPicDisabled = false
    }else{
      this.privacy = false;
      this.isPicDisabled = true;
    }
  },
  updated(){
    console.log('this.privacy (in updated) here: ', this.privacy)
    if(this.allInfo.privacy_agreement || this.privacy){
      this.isPicDisabled = false
    }else{
      this.isPicDisabled = true
    }
  }
};
</script>

<style>
/* .footer {
  background: #ffffff;
  border-top: 1px solid #e8e8e8;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 10%;
} */

.active {
  color: #0366CB;
}

.iconDisabled {
    pointer-events:none; 
    opacity:0.6;        
 }

 .footer i{
   font-size: 1.5rem;
 }
</style>