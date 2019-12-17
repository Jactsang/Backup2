<template>
  <div>
    <Header />
    <EmailInput />
  </div>
</template>

<script>
import Header from "../components/layout/Header"
import EmailInput from "../components/EmailInput";

export default {
  name: "Home",
  components: {
    EmailInput,
    Header
  }
};
</script>

<style scoped>

</style>
