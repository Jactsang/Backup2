<template>
  <div>
    <Header />
    <ProfilePic />
    <Footer/>
  </div>
</template>

<script>
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import ProfilePic from "../components/ProfilePic";


export default {
  name: "PicPage",
  components: {
    ProfilePic,
    Header,
    Footer
  }
};
</script>

<style scoped>

</style>
