<template>
  <div class="container mt-4">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h3>Event Schedules</h3>
      <router-link class="btn btn-primary" :to="{ name: 'create_schedule' }">Add Schedule</router-link>
    </div>

    <div class="mb-3">
      <label for="eventSelect" class="form-label">Filter by Event</label>
      <select id="eventSelect" class="form-select" v-model="selectedEvent" @change="fetchSchedules">
        <option value="">-- All Events --</option>
        <option v-for="ev in events" :key="ev.id" :value="ev.id">{{ ev.title }}</option>
      </select>
    </div>

    <table class="table table-striped">
      <thead class="table-dark">
        <tr>
          <th>#</th>
          <th>Time</th>
          <th>Duration (mins)</th>
          <th>Title</th>
          <th>Details</th>
          <th>Event</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(s, idx) in schedules.data ? schedules.data : schedules" :key="s.id">
          <td>{{ idx + 1 }}</td>
          <td>{{ formatDateTime(s.time) }}</td>
          <td>{{ s.duration }}</td>
          <td>{{ s.title }}</td>
          <td>{{ s.details }}</td>
          <td>{{ s.event ? s.event.title : '—' }}</td>
          <td>
            <router-link :to="{ name: 'edit_schedule', params: { id: s.id } }" class="btn btn-sm btn-primary me-2">Edit</router-link>
            <button class="btn btn-sm btn-danger" @click="deleteSchedule(s.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-if="schedules.meta" class="d-flex justify-content-between align-items-center">
      <small>Page {{ schedules.meta.current_page }} of {{ schedules.meta.last_page }}</small>
      <div>
        <button class="btn btn-sm btn-outline-secondary me-2" :disabled="!schedules.links.prev" @click="goPage(schedules.meta.current_page - 1)">Prev</button>
        <button class="btn btn-sm btn-outline-secondary" :disabled="!schedules.links.next" @click="goPage(schedules.meta.current_page + 1)">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
import DataService from "../../services/DataService";

export default {
  name: "EventScheduleIndex",
  data() {
    return {
      events: [],
      schedules: [],
      selectedEvent: "",
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
    fetchSchedules(page = 1) {
      const params = {};
      if (this.selectedEvent) params.event_id = this.selectedEvent;
      params.page = page;
      DataService.ScheduleIndex(params)
        .then((res) => {
          this.schedules = res.data;
        })
        .catch((e) => console.error(e));
    },
    formatDateTime(dt) {
      if (!dt) return "—";
      const d = new Date(dt);
      return d.toLocaleString();
    },
    deleteSchedule(id) {
      if (!confirm("Delete this schedule?")) return;
      DataService.DeleteSchedule(id)
        .then(() => {
          alert("Deleted");
          this.fetchSchedules();
        })
        .catch((e) => console.error(e));
    },
    goPage(page) {
      if (page < 1) return;
      this.fetchSchedules(page);
    },
  },
  mounted() {
    this.fetchEvents();
    this.fetchSchedules();
  },
};
</script>

<style scoped>
.table img {
  object-fit: cover;
}
</style>
