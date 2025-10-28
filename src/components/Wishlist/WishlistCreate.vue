<template>
  <div class="container mt-4">
    <h2 class="mb-3">Add Wishlist</h2>

    <form @submit.prevent="createWishlist">
      <div class="mb-3">
        <label>User ID</label>
        <input type="number" v-model="form.user_id" class="form-control" required />
      </div>

      <div class="mb-3">
        <label>Event ID</label>
        <input type="number" v-model="form.event_id" class="form-control" required />
      </div>

      <button type="submit" class="btn btn-success">Save Wishlist</button>
    </form>
  </div>
</template>

<script>
import DataService from "@/services/DataService";

export default {
  name: "CreateWishlist",
  data() {
    return {
      form: {
        user_id: "",
        event_id: "",
      },
    };
  },
  methods: {
    async createWishlist() {
      try {
        await DataService.createWishlist(this.form);
        alert("Wishlist added successfully!");
        this.$router.push("/wishlists");
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
