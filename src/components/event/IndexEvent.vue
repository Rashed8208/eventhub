<template>
  <div class="container py-5">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2>All Events</h2>
      <router-link to="/events/create" class="btn btn-primary">
        <i class="bi bi-plus-circle"></i> Add New Event
      </router-link>
    </div>

    <table class="table table-bordered table-striped">
      <thead class="table-dark">
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Location</th>
          <th>Date</th>
          <th>Time</th>
          <th>Price</th>
          <th>Tickets</th>
          <th>Image</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(event, index) in events" :key="event.id">
          <td>{{ index + 1 }}</td>
          <td>{{ event.title }}</td>
          <td>{{ event.location }}</td>
          <td>{{ event.date }}</td>
          <td>{{ event.start_time }} - {{ event.end_time }}</td>
          <td>{{ event.price }}</td>
          <td>{{ event.available_tickets }}</td>
          <td>
            <img :src="event.image" alt="" width="70" height="60" v-if="event.image" />
          </td>
          <td>
            <router-link
              :to="`/events/edit/${event.id}`"
              class="btn btn-sm btn-warning me-2"
            >
              Edit
            </router-link>
            <button @click="deleteEvent(event.id)" class="btn btn-sm btn-danger">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "IndexEvent",
  data() {
    return {
      events: [],
    };
  },
  mounted() {
    this.loadEvents();
  },
  methods: {
    async loadEvents() {
      const res = await axios.get("/api/events");
      this.events = res.data;
    },
    async deleteEvent(id) {
      if (confirm("Are you sure you want to delete this event?")) {
        await axios.delete(`/api/events/${id}`);
        this.loadEvents();
      }
    },
  },
};
</script>
