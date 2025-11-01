<template>
  <div class="container mt-4">
    <h3>Edit Schedule</h3>

    <form v-if="loaded" @submit.prevent="submit">
      <div class="mb-3">
        <label class="form-label">Event</label>
        <select class="form-select" v-model="form.event_id" required>
          <option value="" disabled>Select event</option>
          <option v-for="ev in events" :key="ev.id" :value="ev.id">{{ ev.title }}</option>
        </select>
      </div>

      <div class="mb-3">
        <label class="form-label">Time</label>
        <input type="datetime-local" class="form-control" v-model="form.time" required />
      </div>

      <div class="mb-3">
        <label class="form-label">Duration (minutes)</label>
        <input type="number" class="form-control" v-model.number="form.duration" required min="1" />
      </div>

      <div class="mb-3">
        <label class="form-label">Title</label>
        <input type="text" class="form-control" v-model="form.title" required />
      </div>

      <div class="mb-3">
        <label class="form-label">Details</label>
        <textarea class="form-control" v-model="form.details"></textarea>
      </div>

      <button class="btn btn-primary" type="submit">Save</button>
      <router-link class="btn btn-secondary ms-2" :to="{ name: 'index_schedules' }">Cancel</router-link>
    </form>

    <div v-else>Loading...</div>
  </div>
</template>

<script>
import DataService from "../../services/DataService";

export default {
  name: "EventScheduleEdit",
  data() {
    return {
      events: [],
      form: {
        event_id: "",
        time: "",
        duration: 60,
        title: "",
        details: "",
      },
      loaded: false,
    };
  },
  methods: {
    fetchEvents() {
      DataService.EventIndex()
        .then((res) => {
          this.events = res.data.data ? res.data.data : res.data;
        })
        .catch((e) => console.error(e));
    },
    fetchSchedule() {
      const id = this.$route.params.id;
      DataService.SingleSchedule(id)
        .then((res) => {
          const s = res.data;
          // convert server datetime to datetime-local value
          let timeVal = s.time;
          if (timeVal) {
            // ensure format: YYYY-MM-DDTHH:MM
            timeVal = timeVal.replace(' ', 'T').slice(0,16);
          }
          this.form = {
            event_id: s.event_id,
            time: timeVal,
            duration: s.duration,
            title: s.title,
            details: s.details,
          };
          this.loaded = true;
        })
        .catch((e) => console.error(e));
    },
    submit() {
      const id = this.$route.params.id;
      const payload = { ...this.form,'_method': 'PUT' };
     
      if (payload.time && payload.time.indexOf('T') !== -1) {
        payload.time = payload.time.replace('T', ' ');
      }
      DataService.UpdateSchedule(id, payload)
        .then(() => {
          alert('Schedule updated');
          this.$router.push({ name: 'index_schedules' });
        })
        .catch((e) => {
          console.error(e);
          alert('Error updating schedule');
        });
    },
  },
  mounted() {
    this.fetchEvents();
    this.fetchSchedule();
  },
};
</script>

<style scoped></style>
