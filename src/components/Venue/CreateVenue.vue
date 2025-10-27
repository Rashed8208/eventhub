<template>
  <div class="container mt-4">
    <h2 class="mb-3">Create Venue</h2>

    <form @submit.prevent="createVenue" enctype="multipart/form-data">
      <div class="mb-3">
        <label>Name</label>
        <input type="text" v-model="form.name" class="form-control" />
      </div>

      <div class="mb-3">
        <label>Description</label>
        <textarea v-model="form.description" class="form-control"></textarea>
      </div>

      <div class="mb-3">
        <label>Address</label>
        <input type="text" v-model="form.address" class="form-control" />
      </div>

      <div class="mb-3">
        <label>City</label>
        <input type="text" v-model="form.city" class="form-control" />
      </div>

      <div class="mb-3">
        <label>Capacity</label>
        <input type="number" v-model="form.capacity" class="form-control" />
      </div>

      <div class="mb-3">
        <label>Price Per Day</label>
        <input type="number" step="0.01" v-model="form.price_per_day" class="form-control" />
      </div>

      <div class="mb-3">
        <label>Image</label>
        <input type="file" @change="onFileChange" class="form-control" />
      </div>

      <div class="mb-3">
        <label>Status</label>
        <select v-model="form.status" class="form-select">
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      <button type="submit" class="btn btn-success">Save Venue</button>
    </form>
  </div>
</template>

<script>
import DataService from "@/services/DataService";

export default {
  data() {
    return {
      form: {
        name: "",
        description: "",
        address: "",
        city: "",
        capacity: "",
        price_per_day: "",
        image: null,
        status: "active",
      },
    };
  },
  methods: {
    onFileChange(e) {
      this.form.image = e.target.files[0];
    },
    async createVenue() {
      const formData = new FormData();
      for (let key in this.form) formData.append(key, this.form[key]);

      await DataService.createVenue(formData);
      alert("Venue created successfully!");
      this.$router.push("/venues");
    },
  },
};
</script>
