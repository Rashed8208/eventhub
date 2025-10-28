<template>
  <div class="container mt-4">
    <h2 class="mb-3">Edit Venue</h2>

    <form @submit.prevent="updateVenue" enctype="multipart/form-data">
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
        <label>Current Image</label><br />
        <img v-if="form.image" :src="form.image" width="120" height="80" class="rounded mb-2" />
        <input type="file" @change="onFileChange" class="form-control" />
      </div>

      <div class="mb-3">
        <label>Status</label>
        <select v-model="form.status" class="form-select">
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      <button type="submit" class="btn btn-primary">Update Venue</button>
    </form>
  </div>
</template>

<script>
import DataService from "@/services/DataService";

export default {
  data() {
    return {
      form: {},
    };
  },
  methods: {
    async fetchVenue() {
      const id = this.$route.params.id;
      const response = await DataService.getVenueById(id);
      this.form = response.data;
    },
    onFileChange(e) {
      this.form.image = e.target.files[0];
    },
    async updateVenue() {
      const id = this.$route.params.id;
      const formData = new FormData();
      for (let key in this.form) formData.append(key, this.form[key]);

      await DataService.updateVenue(id, formData);
      alert("Venue updated successfully!");
      this.$router.push("/venues");
    },
  },
  mounted() {
    this.fetchVenue();
  },
};
</script>
