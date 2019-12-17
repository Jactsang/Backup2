<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>-->
    <router-view />
    <!-- <Footer /> -->
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "app",
  components: {
    // Footer
  },
  methods:{
    ...mapActions(["fetchInfo"]),
  },
  computed: mapGetters(["allInfo"]),
  mounted(){
    this.fetchInfo();
  },
  updated(){
    this.fetchInfo();
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-bottom: 60px; */
}

.buttonSession{
  margin-bottom: 8%;
}

.vs-select--label{
  color: rgba(41, 26, 26, 0.7)!important;
}

.vs-select--input{
    padding: 13px!important;
    border: 1px solid rgba(0, 0, 0, 0.2)!important;
}

.vs-checkbox{
    width: 10px!important;
    height: 10px!important;
    padding: 1.5%!important;
}

.vs-checkbox--input{
   z-index: 1;
}

.con-slot-label{
  font-size: .8rem;
  text-align: left;
}

a:visited, a:link {
  color: #2c3e50;
}

.footer {
  background: #ffffff;
  border-top: 1px solid #e8e8e8;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 10%;
}

@media screen and (max-width: 576px) {
  .footerPosition {
    margin-top: 5%;
  }
}
@media screen and (min-width: 577px) {
  .footerPosition {
    margin-top: 1.8%;
  }
}
@media screen and (min-width: 768px) {
  .footerPosition {
    margin-top: 1.5%;
  }
}

.material-icons{
  font-size: 12px!important;
}

</style>
