<template>
  <div class="container py-5">
    <h2 class="mb-4">Edit Event</h2>
    <form @submit.prevent="updateEvent" enctype="multipart/form-data">
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
          <div v-if="form.image && !newImage">
            <img :src="form.image" width="100" class="mt-2" />
          </div>
        </div>
      </div>

      <button @click="updateEvent" class="btn btn-primary">Update Event</button>
    </form>
  </div>
</template>

<script>
import DataService from "../../services/DataService";

export default {
  name: "EditEvent",
  data() {
    return {
      form: {},
      newImage: null,
    };
  },
  methods: {
    getevent(id) {
      DataService.SingleEvent(id)
      .then(response => {
        if(response.data) this.form = response.data;
        else alert(response.data.error || 'Failed to load unit');
      })
      .catch(e => console.log(e));
    },
    updateEvent() {
      const id = this.$route.params.id;
      let formData = new FormData();
      formData.append('name', this.form.name);
      formData.append('address', this.form.address);
      formData.append('decription', this.form.decription);
      formData.append('rating', this.form.rating);
      formData.append('phone', this.form.phone);
      formData.append('_method', "PUT");
      const imageInput = document.getElementById('image');
      if (imageInput.files.length > 0) {
          formData.append('image', imageInput.files[0]);
      }

      // update
      DataService.UpdateEvent(id, formData)
      .then(response => {
          console.log(response.data);
          alert('Event updated successfully!');
          this.$router.push({ name: 'index_event' });
      })
      .catch(e => console.log(e));
    }
  },
  mounted() {
    const id = this.$route.params.id;
    if (id) this.getevent(id);
  }
};
</script>
