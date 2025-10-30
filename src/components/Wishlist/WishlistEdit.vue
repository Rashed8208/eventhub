<template>
  <div class="container py-5">
    <h2 class="mb-4">Edit Wishlist Item</h2>
    <form @submit.prevent="updateWishlist">
      <div class="row">
        <div class="col-md-6 mb-3">
          <label>User ID</label>
          <input v-model="form.user_id" type="number" class="form-control" />
        </div>

        <div class="col-md-6 mb-3">
          <label>Event ID</label>
          <input v-model="form.event_id" type="number" class="form-control" />
        </div>
      </div>

      <button @click="updateWishlist" class="btn btn-primary">Update Wishlist</button>
    </form>
  </div>
</template>

<script>
import DataService from "../../services/DataService";

export default {
  name: "EditWishlist",
  data() {
    return {
      form: {},
    };
  },
  methods: {
    getWishlist(id) {
      DataService.SingleWishlist(id)
        .then((response) => {
          if (response.data) this.form = response.data;
          else alert("Failed to load wishlist item.");
        })
        .catch((e) => console.log(e));
    },
    updateWishlist() {
      const id = this.$route.params.id;
       let formData = new FormData();

       formData.append("user_id", this.form.user_id);
       formData.append("event_id", this.form.event_id);

      DataService.UpdateWishlist(id, formData)
        .then((response) => {
          console.log(response.data);
          alert("Wishlist item updated successfully!");
          this.$router.push({ name: "index_wishlist" });
        })
        .catch((e) => console.log(e));
    },
  },
  mounted() {
    const id = this.$route.params.id;
    if (id) this.getWishlist(id);
  },
};
</script>
