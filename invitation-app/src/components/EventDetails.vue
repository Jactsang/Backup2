<template>
  <div class="eventDetails">
    <vs-row vs-w="12" type="flex" vs-justify="center" vs-align="center" class="dotNav">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-lg="12" vs-sm="12" vs-xs="12">
            <i class="fas fa-circle" :key="index" v-for="(event, index) in eventList" @click="showEvent(index)" :class="{selectedDot: activeDot === index }" ></i>
        </vs-col>
      </vs-row>
      <!-- <vs-row vs-w="12" type="flex" vs-justify="center" vs-align="center">
        <vs-col type="flex" vs-justify="center" vs-align="center" vs-lg="12" vs-sm="12" vs-xs="12">
          <div :key="index" v-for="(event, index) in eventList">
            <p :class="{ selectedEvent : activeEvent !== index }">{{ event }}</p>
          </div>
        </vs-col>
        </vs-row> -->
   <div :key="index" v-for="(event, index) in eventList">
    <vs-row vs-w="12" type="flex" vs-justify="center" vs-align="center" :class="{ selectedEvent : activeEvent !== index }">
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
          <p class="title margin">{{ event.eventTitle }}</p>
        </vs-row>
      </vs-col>
    </vs-row>
    <vs-row vs-w="12" type="flex" vs-justify="center" vs-align="center" :class="{ selectedEvent : activeEvent !== index }">
      <vs-col vs-lg="4" vs-sm="8" vs-xs="10">
        <vs-divider />
      </vs-col>
    </vs-row>
    <vs-row vs-w="12" type="flex" vs-justify="center" vs-align="center" :class="{ selectedEvent : activeEvent !== index }">
      <vs-col vs-lg="4" vs-sm="8" vs-xs="10">
        <vs-row vs-w="12">
          <p class="subhead">Time</p>
        </vs-row>
        <vs-row vs-w="12">
          <p class="content margin">{{ event.time }}</p>
        </vs-row>
        <vs-row vs-w="12">
          <vs-divider />
        </vs-row>
      </vs-col>
    </vs-row>
    <vs-row vs-w="12" type="flex" vs-justify="center" vs-align="center" :class="{ selectedEvent : activeEvent !== index }">
      <vs-col vs-lg="4" vs-sm="8" vs-xs="10">
        <vs-row vs-w="12">
          <p class="subhead">Location</p>
        </vs-row>
        <vs-row vs-w="12">
          <p class="content margin">{{ event.location }}</p>
        </vs-row>
        <vs-row vs-w="12">
          <vs-divider />
        </vs-row>
      </vs-col>
    </vs-row>
    <vs-row vs-w="12" type="flex" vs-justify="center" vs-align="center" :class="{ selectedEvent : activeEvent !== index }">
      <vs-col vs-lg="4" vs-sm="8" vs-xs="10">
        <vs-row vs-w="12">
          <p class="subhead">Organizer</p>
        </vs-row>
        <vs-row vs-w="12">
          <p class="content margin">{{ event.organizer }}</p>
        </vs-row>
        <vs-row vs-w="12">
          <vs-divider />
        </vs-row>
      </vs-col>
    </vs-row>
    <vs-row vs-w="12" type="flex" vs-justify="center" vs-align="center" :class="{ selectedEvent : activeEvent !== index }">
      <vs-col vs-lg="4" vs-sm="8" vs-xs="10">
        <vs-row vs-w="12">
          <p class="subhead">Guests</p>
        </vs-row>
        <vs-row vs-w="12">
          <p
            class="content margin"
            v-for="(guest, guestIndex) in event.guests"
            :key="guestIndex"
          >{{ guests.length > 1 && guestIndex !== guests.length - 1 ? guest + ", ": guest }}</p>
        </vs-row>
      </vs-col>
    </vs-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "EventDetails",
  data() {
    return {
      date: "31 Dec 2019",
      eventTitle: "New Event",
      time: "4:00pm",
      location: "TST",
      organizer: "Host 1",
      guests: ["Guest 1", "Guest 2", "Guest 3", "Guest 4", "Guest 5"],
      eventList: [{
        eventTitle: "event 1",
        time: "12:00pm",
        location: "HK",
        organizer: "Host ABC",
        guests: ["Guest 1", "Guest 2", "Guest 3", "Guest 4", "Guest 5"]
      }, {
        eventTitle: "meeting",
        time: "12:00pm",
        location: "HK",
        organizer: "Host CDE",
        guests: ["Guest 8", "Guest 9", "Guest 3", "Guest 4", "Guest 5"]
      }, {
        eventTitle: "discussion",
        time: "12:00pm",
        location: "HK",
        organizer: "Host XYZ",
        guests: ["Guest 6", "Guest 7", "Guest 3", "Guest 4", "Guest 5"]
      }, {
        eventTitle: "event 4",
        time: "12:00pm",
        location: "HK",
        organizer: "Host FGH",
        guests: ["Guest 1", "Guest 2", "Guest 3", "Guest 4", "Guest 5"]
      }],
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
  height: 5.6em;
  background-color: #fff;
  border-radius: 0.6em;
  box-shadow: 0 1px 0 #bdbdbd, 0 2px 0 #fff, 0 3px 0 #bdbdbd, 0 4px 0 #fff,
    0 5px 0 #bdbdbd, 0 0 0 1px #bdbdbd;
  overflow: hidden;
}

time.icon * {
  display: block;
  width: 100%;
  font-size: .8em;
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
  font-size: 2.3em;
  letter-spacing: -0.05em;
  padding-top: 0.8em;
  color: #2f2f2f;
}

.fa-circle{
  margin: 0 8px;
  font-size: .5rem;
  color: #bfbfbf;
}

.selectedEvent * {
  display: none;
}

.selectedDot{
  color: #0366CB;
}

.dotNav{
  margin-bottom: 2%;
}

</style>
