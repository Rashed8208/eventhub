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
          <input id="image" type="file" class="form-control" />
        </div>
      </div>

      <button class="btn btn-success">Create Event</button>
    </form>
  </div>
</template>

<script>
import DataService from "../../services/DataService";

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
    createEvent() {
        let formData = new FormData();
        formData.append('title', this.form.title);
        formData.append('location', this.form.location);
        formData.append('date', this.form.date);
        formData.append('start_time', this.form.start_time);
        formData.append('end_time', this.form.end_time);
        formData.append('price', this.form.price);
        formData.append('available_tickets', this.form.available_tickets);
        const imageInput = document.getElementById('image');
        if (imageInput.files.length > 0) {
            formData.append('image', imageInput.files[0]);
        }
        
        DataService.AddEvent(formData)
        .then(response => {
            console.log(response.data);
            alert("Event added successfully!");
            this.$router.push({ name: 'index_event' });
        })
        .catch(e => {
            console.log(e);
        });
    }
  },
};
</script>
