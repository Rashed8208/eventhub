<template>
  <div class="container mt-5">
    <h2>Add New Event</h2>

    <form @submit.prevent="addEvent" enctype="multipart/form-data">
      <div class="row">
        <!-- Title -->
        <div class="col-md-4">
          <div class="mb-3">
            <label for="title" class="form-label">Event Title</label>
            <input
              type="text"
              class="form-control"
              id="title"
              v-model="event.title"
              required
            />
          </div>
        </div>

        <!-- Location -->
        <div class="col-md-4">
          <div class="mb-3">
            <label for="location" class="form-label">Location</label>
            <input
              type="text"
              class="form-control"
              id="location"
              v-model="event.location"
              required
            />
          </div>
        </div>

        <!-- Date -->
        <div class="col-md-4">
          <div class="mb-3">
            <label for="date" class="form-label">Date</label>
            <input
              type="date"
              class="form-control"
              id="date"
              v-model="event.date"
              required
            />
          </div>
        </div>

        <!-- Start Time -->
        <div class="col-md-4">
          <div class="mb-3">
            <label for="start_time" class="form-label">Start Time</label>
            <input
              type="time"
              class="form-control"
              id="start_time"
              v-model="event.start_time"
              required
            />
          </div>
        </div>

        <!-- End Time -->
        <div class="col-md-4">
          <div class="mb-3">
            <label for="end_time" class="form-label">End Time</label>
            <input
              type="time"
              class="form-control"
              id="end_time"
              v-model="event.end_time"
              required
            />
          </div>
        </div>

        <!-- Price -->
        <div class="col-md-4">
          <div class="mb-3">
            <label for="price" class="form-label">Price</label>
            <input
              type="number"
              class="form-control"
              id="price"
              v-model="event.price"
              step="0.01"
              required
            />
          </div>
        </div>

        <!-- Available Tickets -->
        <div class="col-md-4">
          <div class="mb-3">
            <label for="available_tickets" class="form-label">Available Tickets</label>
            <input
              type="number"
              class="form-control"
              id="available_tickets"
              v-model="event.available_tickets"
              required
            />
          </div>
        </div>

        <!-- Image Upload -->
        <div class="col-md-4">
          <div class="mb-3">
            <label for="image" class="form-label">Event Image</label>
            <input
              type="file"
              class="form-control"
              id="image"
              @change="onFileChange"
            />
          </div>
        </div>
      </div>

      <button type="submit" class="btn btn-primary">Add Event</button>
    </form>
  </div>
</template>

<script>
import DataService from "../../services/DataService";

export default {
  name: "CreateEvent",
  data() {
    return {
      event: {
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
    onFileChange(e) {
      this.event.image = e.target.files[0];
    },
    addEvent() {
      const formData = new FormData();
      for (let key in this.event) {
        formData.append(key, this.event[key]);
      }

      DataService.AddEvent(formData)
        .then((response) => {
          console.log(response.data);
          alert("Event added successfully!");
          this.$router.push({ name: "event_list" });
        })
        .catch((e) => {
          console.log("Error:", e);
        });
    },
  },
};
</script>
