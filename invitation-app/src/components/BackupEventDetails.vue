<template>
  <div class="eventDetails">
    <vs-row vs-w="12" type="flex" vs-justify="center" vs-align="center">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-lg="12" vs-sm="12" vs-xs="12">
            <i class="fas fa-circle" :key="index" v-for="(event, index) in eventList" @click="showEvent(index)" :class="{selectedDot: activeDot === index }" ></i>
        </vs-col>
      </vs-row>
      <vs-row vs-w="12" type="flex" vs-justify="center" vs-align="center">
        <vs-col type="flex" vs-justify="center" vs-align="center" vs-lg="12" vs-sm="12" vs-xs="12">
          <div :key="index" v-for="(event, index) in eventList">
            <p :class="{ selectedEvent : activeEvent !== index }">{{ event }}</p>
          </div>
        </vs-col>
        </vs-row>
   
    <vs-row vs-w="12" type="flex" vs-justify="center" vs-align="center">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-lg="1" vs-sm="2" vs-xs="2">
        <!-- date -->
        <time datetime="2014-09-20" class="icon">
          <em>Saturday</em>
          <strong>September</strong>
          <span>20</span>
        </time>
      </vs-col>
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-lg="3" vs-sm="6" vs-xs="7">
        <vs-row class="itemPadding" vs-w="12">
          <p class="subhead">Upcoming Event</p>
        </vs-row>
        <vs-row class="itemPadding" vs-w="12">
          <p class="title margin">{{ eventTitle }}</p>
        </vs-row>
      </vs-col>
    </vs-row>
    <vs-row vs-w="12" type="flex" vs-justify="center" vs-align="center">
      <vs-col vs-lg="4" vs-sm="8" vs-xs="10">
        <vs-divider />
      </vs-col>
    </vs-row>
    <vs-row vs-w="12" type="flex" vs-justify="center" vs-align="center">
      <vs-col vs-lg="4" vs-sm="8" vs-xs="10">
        <vs-row vs-w="12">
          <p class="subhead">Time</p>
        </vs-row>
        <vs-row vs-w="12">
          <p class="content margin">{{ time }}</p>
        </vs-row>
        <vs-row vs-w="12">
          <vs-divider />
        </vs-row>
      </vs-col>
    </vs-row>
    <vs-row vs-w="12" type="flex" vs-justify="center" vs-align="center">
      <vs-col vs-lg="4" vs-sm="8" vs-xs="10">
        <vs-row vs-w="12">
          <p class="subhead">Location</p>
        </vs-row>
        <vs-row vs-w="12">
          <p class="content margin">{{ location }}</p>
        </vs-row>
        <vs-row vs-w="12">
          <vs-divider />
        </vs-row>
      </vs-col>
    </vs-row>
    <vs-row vs-w="12" type="flex" vs-justify="center" vs-align="center">
      <vs-col vs-lg="4" vs-sm="8" vs-xs="10">
        <vs-row vs-w="12">
          <p class="subhead">Organizer</p>
        </vs-row>
        <vs-row vs-w="12">
          <p class="content margin">{{ organizer }}</p>
        </vs-row>
        <vs-row vs-w="12">
          <vs-divider />
        </vs-row>
      </vs-col>
    </vs-row>
    <vs-row vs-w="12" type="flex" vs-justify="center" vs-align="center">
      <vs-col vs-lg="4" vs-sm="8" vs-xs="10">
        <vs-row vs-w="12">
          <p class="subhead">Guests</p>
        </vs-row>
        <vs-row vs-w="12">
          <p
            class="content margin"
            v-for="(guest, guestIndex) in guests"
            :key="guestIndex"
          >{{ guests.length > 1 && guestIndex !== guests.length - 1 ? guest + ", ": guest }}</p>
        </vs-row>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "BackupEventDetails",
  data() {
    return {
      date: "31 Dec 2019",
      eventTitle: "New Event",
      time: "4:00pm",
      location: "TST",
      organizer: "Host 1",
      guests: ["Guest 1", "Guest 2", "Guest 3", "Guest 4", "Guest 5"],
      eventList: ["event 1", "event 2", "event 3", "event 4"],
      activeEvent: 0,
      activeDot: 0
    };
  },
  methods: {
    showEvent(index){
      this.activeEvent = index;
      this.activeDot = index;
    }
  },
  computed: mapGetters(["allInfo"])
};
</script>

<style scoped>
.eventDetails {
  margin-top: 3%;
}

.subhead {
  font-size: 0.8rem;
}

.title {
  font-size: 1.5rem;
}

.content {
  font-size: 1.2rem;
}

@media screen and (max-width: 576px) {
  .eventDetails {
    margin-bottom: 25%;
  }
  .footerPosition {
    margin-top: 5%;
  }
  .itemPadding {
    padding-left: 10%;
  }
}
@media screen and (min-width: 577px) {
  .eventDetails {
    margin-bottom: 10%;
  }
  .footerPosition {
    margin-top: 1.8%;
  }
  .itemPadding {
    padding-left: 3%;
  }
}
@media screen and (min-width: 768px) {
  .eventDetails {
    margin-bottom: 6%;
  }
  .footerPosition {
    margin-top: 1.5%;
  }
  .itemPadding {
    padding-left: 0;
  }
}

time.icon {
  font-size: .8em; /* change icon size */
  display: block;
  position: relative;
  width: 5.8em;
  height: 6.5em;
  
  background-color: #fff;
  border-radius: 0.6em;
  box-shadow: 0 1px 0 #bdbdbd, 0 2px 0 #fff, 0 3px 0 #bdbdbd, 0 4px 0 #fff,
    0 5px 0 #bdbdbd, 0 0 0 1px #bdbdbd;
  overflow: hidden;
}

time.icon * {
  display: block;
  width: 100%;
  font-size: 1em;
  font-weight: bold;
  font-style: normal;
  text-align: center;
}

time.icon strong {
  position: absolute;
  top: 0;
  padding: 0.2em 0;
  color: #fff;
  background-color: #0366cb;
  border-bottom: 1px dashed #0354a5;
  box-shadow: 0 2px 0 #0366cb;
}

time.icon em {
  position: absolute;
  bottom: 0.3em;
  color: #0366cb;
}

time.icon span {
  font-size: 2.5em;
  letter-spacing: -0.05em;
  padding-top: 0.8em;
  color: #2f2f2f;
}

.fa-circle{
  margin: 0 1%;
  font-size: .5rem;
}

.selectedEvent{
  display: none;
}

.selectedDot{
  color: #0366CB;
}
</style>
