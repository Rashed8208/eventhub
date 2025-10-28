<template>
  <div class="container mt-4">
    <h2 class="mb-3">Edit Wishlist</h2>

    <form @submit.prevent="updateWishlist">
      <div class="mb-3">
        <label>User ID</label>
        <input type="number" v-model="form.user_id" class="form-control" required />
      </div>

      <div class="mb-3">
        <label>Event ID</label>
        <input type="number" v-model="form.event_id" class="form-control" required />
      </div>

      <button type="submit" class="btn btn-primary">Update Wishlist</button>
    </form>
  </div>
</template>

<script>
import DataService from "@/services/DataService";

export default {
  name: "EditWishlist",
  data() {
    return {
      form: {
        user_id: "",
        event_id: "",
      },
    };
  },
  methods: {
    async fetchWishlist() {
      const id = this.$route.params.id;
      const res = await DataService.getWishlistById(id);
      this.form = res.data;
    },
    async updateWishlist() {
      const id = this.$route.params.id;
      await DataService.updateWishlist(id, this.form);
      alert("Wishlist updated successfully!");
      this.$router.push("/wishlists");
    },
  },
  mounted() {
    this.fetchWishlist();
  },
};
</script>
