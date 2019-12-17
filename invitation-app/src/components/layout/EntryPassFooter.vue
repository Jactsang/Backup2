<template>
  <div class="footer">
    <vs-row class="footerPosition" vs-type="flex" vs-justify="space-between" vs-w="12">
      <vs-col class="text" vs-type="flex" vs-justify="center" vs-align="center" vs-lg="2" vs-sm="4" vs-xs="6"><i class="fas fa-check-circle"></i>See You Soon {{ allInfo.first_name !== "" || undefined ? ", " + allInfo.first_name: ""}}!</vs-col>
      <vs-col class="text" vs-type="flex" vs-justify="center" vs-align="center" vs-lg="2" vs-sm="4" vs-xs="6">
          <router-link to="/info">Review</router-link>
          </vs-col>
    </vs-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "EntryPassFooter",
  computed: mapGetters(["allInfo"])
};
</script>

<style scoped>
/* .footer {
  background: #ffffff;
  border-top: 1px solid #e8e8e8;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 10%;
} */

.text{
    font-size: 1rem;
    text-align: center
}

.text a{
  color: #0366CB
}

.fa-check-circle{
  color: #0366CB;
  font-size: 1rem;
  margin-left: 2%;
  margin-right: 2%;
}
</style>