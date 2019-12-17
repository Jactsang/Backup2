<template>
  <div id="app">
    <Header />
    <EmailInput />
  </div>
</template>

<script>
import Header from "./components/layout/Header"
import EmailInput from "./components/EmailInput.vue";

export default {
  name: "BackupApp",
  components: {
    EmailInput,
    Header
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
