<template>
<div>
  <div class="qrcodeSession">
    <EntryPassHeader />
    <QRcode />
  </div>
    <EventDetails />
    <EntryPassFooter />
  </div>
</template>
<script>
import QRcode from "../components/QRcode";
import EventDetails from "../components/EventDetails";
import EntryPassHeader from "../components/layout/EntryPassHeader";
import EntryPassFooter from "../components/layout/EntryPassFooter";

export default {
  name: "EntryPass",
  components: {
    QRcode,
    EventDetails,
    EntryPassHeader,
    EntryPassFooter,
  }
};
</script>
<style scoped>
.qrcodeSession {
  width: 100%;
  background-color: #0366CB;
  padding: 2%;
}
</style>
