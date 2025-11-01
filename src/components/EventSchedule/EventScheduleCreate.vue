<template>
  <div class="container mt-4">
    <h3>Add Schedule</h3>

    <form @submit.prevent="submit">
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
  </div>
</template>

<script>
import DataService from "../../services/DataService";

export default {
  name: "EventScheduleCreate",
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
    submit() {
      // convert datetime-local to server format
      // browser datetime-local value is like "2025-12-01T14:30"
      const payload = { ...this.form };
      if (payload.time && payload.time.indexOf('T') !== -1) {
        payload.time = payload.time.replace('T', ' ');
      }

      DataService.AddSchedule(payload)
        .then((res) => {
          alert(res.data.message || 'Schedule created');
          this.$router.push({ name: 'index_schedules' });
        })
        .catch((err) => {
          console.error(err);
          alert('Error creating schedule');
        });
    },
  },
  mounted() {
    this.fetchEvents();
  },
};
</script>

<style scoped></style>
