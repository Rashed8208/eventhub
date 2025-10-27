<template>
  <div class="container py-5">
    <h2 class="mb-4">Create Event</h2>
    <form @submit.prevent="createEvent" enctype="multipart/form-data">
      <div class="row">
        <div class="col-md-6 mb-3">
          <label>Title</label>
          <input v-model="form.title" type="text" class="form-control" />
        </div>
        <div class="col-md-6 mb-3">
          <label>Location</label>
          <input v-model="form.location" type="text" class="form-control" />
        </div>
        <div class="col-md-4 mb-3">
          <label>Date</label>
          <input v-model="form.date" type="date" class="form-control" />
        </div>
        <div class="col-md-4 mb-3">
          <label>Start Time</label>
          <input v-model="form.start_time" type="time" class="form-control" />
        </div>
        <div class="col-md-4 mb-3">
          <label>End Time</label>
          <input v-model="form.end_time" type="time" class="form-control" />
        </div>
        <div class="col-md-6 mb-3">
          <label>Price</label>
          <input v-model="form.price" type="number" step="0.01" class="form-control" />
        </div>
        <div class="col-md-6 mb-3">
          <label>Available Tickets</label>
          <input v-model="form.available_tickets" type="number" class="form-control" />
        </div>
        <div class="col-md-12 mb-3">
          <label>Image</label>
          <input @change="handleFileUpload" type="file" class="form-control" />
        </div>
      </div>

      <button class="btn btn-success">Create Event</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CreateEvent",
  data() {
    return {
      form: {
        title: "",
        location: "",
        date: "",
        start_time: "",
        end_time: "",
        price: "",
        available_tickets: "",
        image: null,
      },
    };
  },
  methods: {
    handleFileUpload(e) {
      this.form.image = e.target.files[0];
    },
    async createEvent() {
      const formData = new FormData();
      for (const key in this.form) formData.append(key, this.form[key]);

      await axios.post("/api/events", formData);
      alert("Event created successfully!");
      this.$router.push("/events");
    },
  },
};
</script>
