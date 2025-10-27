<template>
  <div class="container mt-4">
    <h2 class="mb-3">All Wishlists</h2>

    <div class="d-flex justify-content-between mb-3">
      <router-link to="/create-wishlist" class="btn btn-primary">+ Add Wishlist</router-link>
    </div>

    <table class="table table-bordered table-striped">
      <thead class="table-dark">
        <tr>
          <th>ID</th>
          <th>User ID</th>
          <th>Event ID</th>
          <th>Created At</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="wishlist in wishlists" :key="wishlist.id">
          <td>{{ wishlist.id }}</td>
          <td>{{ wishlist.user_id }}</td>
          <td>{{ wishlist.event_id }}</td>
          <td>{{ new Date(wishlist.created_at).toLocaleString() }}</td>
          <td>
            <router-link :to="`/edit-wishlist/${wishlist.id}`" class="btn btn-sm btn-info me-2">
              Edit
            </router-link>
            <button class="btn btn-sm btn-danger" @click="deleteWishlist(wishlist.id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import DataService from "@/services/DataService";

export default {
  name: "IndexWishlist",
  data() {
    return {
      wishlists: [],
    };
  },
  methods: {
    async fetchWishlists() {
      try {
        const res = await DataService.getAllWishlists();
        this.wishlists = res.data;
      } catch (error) {
        console.error(error);
      }
    },
    async deleteWishlist(id) {
      if (confirm("Are you sure you want to delete this wishlist item?")) {
        await DataService.deleteWishlist(id);
        this.fetchWishlists();
      }
    },
  },
  mounted() {
    this.fetchWishlists();
  },
};
</script>
