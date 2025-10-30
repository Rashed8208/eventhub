<template>
  <div class="container mt-5">
    <h3><strong>All Wishlist Items</strong></h3>

    <router-link to="/add_wishlist" class="btn btn-primary mb-3">Add New Wishlist</router-link>

    <div class="row">
      <div class="col-12">
        <table class="table table-striped align-middle">
          <thead class="table-dark">
            <tr>
              <th>#SL</th>
              <th>User ID</th>
              <th>Event ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(wish, index) in wishlistData" :key="wish.id">
              <td>{{ index + 1 }}</td>
              <td>{{ wish.user_id }}</td>
              <td>{{ wish.event_id }}</td>
              <td>
                <router-link
                  :to="'/edit_wishlist/' + wish.id"
                  class="btn btn-sm btn-primary me-2"
                >
                  Edit
                </router-link>
                <button
                  @click="deleteWishlist(wish.id)"
                  class="btn btn-sm btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import DataService from "../../services/DataService";

export default {
  name: "WishlistIndex",
  data() {
    return {
      wishlistData: [],
    };
  },
  methods: {
    getData() {
      DataService.WishlistIndex()
        .then((response) => {
          if (response.data) this.wishlistData = response.data;
          else alert(response.data.error);
        })
        .catch((e) => console.log("Error fetching wishlist:", e));
    },
    deleteWishlist(id) {
      if (!confirm("Are you sure you want to delete this wishlist item?")) return;
      DataService.DeleteWishlist(id)
        .then(() => {
          alert("Wishlist item deleted successfully!");
          this.getData();
        })
        .catch((e) => console.log("Error deleting wishlist:", e));
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
