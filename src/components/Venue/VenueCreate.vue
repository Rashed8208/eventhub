<template>
  <div class="container py-5">
    <h2 class="mb-4">Add New Venue</h2>
    <form @submit.prevent="CreateVenue" enctype="multipart/form-data">
      <div class="row">
        <div class="col-md-6 mb-3">
          <label>Name</label>
          <input v-model="form.name" type="text" class="form-control" />
        </div>

        <div class="col-md-6 mb-3">
          <label>City</label>
          <input v-model="form.city" type="text" class="form-control" />
        </div>

        <div class="col-md-12 mb-3">
          <label>Description</label>
          <textarea v-model="form.description" class="form-control" rows="3"></textarea>
        </div>

        <div class="col-md-6 mb-3">
          <label>Address</label>
          <input v-model="form.address" type="text" class="form-control" />
        </div>

        <div class="col-md-3 mb-3">
          <label>Capacity</label>
          <input v-model="form.capacity" type="number" class="form-control" />
        </div>

        <div class="col-md-3 mb-3">
          <label>Price per Day</label>
          <input v-model="form.price_per_day" type="number" step="0.01" class="form-control" />
        </div>

        <div class="col-md-6 mb-3">
          <label>Status</label>
          <select v-model="form.status" class="form-control">
            <option value="">Select Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        <div class="col-md-6 mb-3">
          <label>Image</label>
          <input id="image" type="file" class="form-control" />
        </div>
      </div>

      <button type="submit" class="btn btn-success">Create Venue</button>
    </form>
  </div>
</template>

<script>
import DataService from "../../services/DataService";

export default {
  name: "CreateVenue",
  data() {
    return {
      form: {
        name: "",
        description: "",
        address: "",
        city: "",
        capacity: "",
        price_per_day: "",
        status: "",
      },
    };
  },
  methods: {
    CreateVenue() {
      let formData = new FormData();
      formData.append("name", this.form.name);
      formData.append("description", this.form.description);
      formData.append("address", this.form.address);
      formData.append("city", this.form.city);
      formData.append("capacity", this.form.capacity);
      formData.append("price_per_day", this.form.price_per_day);
      formData.append("status", this.form.status);

      const imageInput = document.getElementById("image");
      if (imageInput.files.length > 0) {
        formData.append("image", imageInput.files[0]);
      }

      DataService.AddVenue(formData)
        .then((response) => {
          console.log(response.data);
          alert("Venue created successfully!");
          this.$router.push({ name: "index_venue" });
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>
